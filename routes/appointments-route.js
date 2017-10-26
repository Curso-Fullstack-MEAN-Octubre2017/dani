const Appointment = require('../models/appointments-model');
const Pet = require('../models/pets-model');
const Customer = require('../models/customers-model');
var moment = require('moment');


module.exports = (router) => {
	
	// Recuperamos todas las citas:
	router.get('/appointments', function(req, res) {
		Appointment.find({}, (err, appointments) => {
			if (err) {
				console.error(err);
				res.sendStatus(500);
			} else {
				res.json(appointments);
			}
		}).sort({'_id' : -1});
	});
	
	// Recuperamos una cita a través de su ID:
	router.get('/appointments/:id', function(req, res){
		Appointment.findById(req.params.id, function(err, appointments) {
			if (err) {
				console.error(err);
				res.sendStatus(500);
			} else {
				res.json(appointments);
			}
		}).populate({
			path: "petId",
			model: "Pet",
			populate: {
				path: "ownerId",
				model: "Customer"
			}
		});
	});
	
	
	//Recuperamos una cita a través de la fecha de inicio y la fecha de fin:
	router.get('/appointments/:fromdate/:todate', function(req, res){
		
		var fechaInicio = moment(req.params.fromdate, 'YYYYMM');
		var fechaFin = moment(req.params.todate, 'YYYYMM');
		
		Appointment.find({dateStart : {"$gte": fechaInicio, "$lt": fechaFin}}, function(err, appointments){
			if (err) {
				console.error(err);
				res.sendStatus(500);
			} else {
				res.json(appointments);				
			}
		}).populate({
			path: "petId",
			model: "Pet",
			select: "name specie",
			populate: {
				path: "ownerId",
				model: "Customer",
				select: "firstName lastName"
			}
		});
	});
	
	//Recuperamos una cita a través de la fecha de inicio y la fecha de fin:
		router.get('/appointmentsByDate/:fromdate/:todate', function(req, res){
			
			var fechaInicio = moment(req.params.fromdate, 'YYYYMMDD');
			var fechaFin = moment(req.params.todate, 'YYYYMMDD');
			
			Appointment.find({dateStart : {"$gte": fechaInicio, "$lt": fechaFin}}, function(err, appointments){
				if (err) {
					console.error(err);
					res.sendStatus(500);
				} else {						
					var appointmentsByDate = {};
					
					for(var i = 0; i < appointments.length; i++){
						var item = appointments[i];
						var date = moment(item.dateStart).format("YYYYMMDD");
						var time = moment(item.dateStart).format("HH:mm");
						
						if(appointmentsByDate[date] == undefined){
							appointmentsByDate[date] = {};
						}
						if(appointmentsByDate[date][time] == undefined){
							appointmentsByDate[date][time] = item;						
						}
					}
					
					res.send(appointmentsByDate);
					return appointmentsByDate;
				}
			}).populate({
				path: "petId",
				model: "Pet",
				select: "name specie",
				populate: {
					path: "ownerId",
					model: "Customer",
					select: "firstName lastName"
				}
			});
		});
		
		// Insertar nueva cita.
		router.post('/appointments', (req, res, next) => {
			const appointment = new Appointment(req.body);
			appointment.save((err) => {
				if (err) {
					console.error(err);
					res.sendStatus(500);
				} else {
					res.json(appointment);
				}
			})
		});
		
		// Actualizar una cita.
		router.put('/appointments/:id', (req, res, next) => {
			Appointment.findOne({_id : req.params.id }, function(err, appointment) {
				if (err) {
					return res.send(err);
				}

				// rellenamos los datos que vienen en la peticion.
				for(prop in req.body){
					appointment[prop] = req.body[prop];
				}
				
				console.log("Actualizando cita", appointment);
				
				// save
				appointment.save(function(err) {
					if (err) {
						console.error(err);
						res.sendStatus(500);
					} else {
						res.json(appointment);
					}
				});
			});
		});	
		
		// Eliminar una cita.
		router.delete('/appointments/:id',function(req, res) {
			console.log("/appointments/" + req.params.id);
			Appointment.findByIdAndRemove(req.params.id, function(err, pet) {
				if (err) {
					console.error(err);
					res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
				} else {
					res.sendStatus(200);//OK
				}
			});
		});
				
	return router;
}