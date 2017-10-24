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
						var date = moment(item.dateStart).format("YYYY-MM-DD");
						var time = moment(item.dateStart).format("HH:mm");
						
						if(appointmentsByDate[date] == null){
							appointmentsByDate[date] = {};
						}
						if(appointmentsByDate[date][time] == null){
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
				
	return router;
}