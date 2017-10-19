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
				Appointment.populate(appointments, {path: "petId", populate: {path: "ownerId"}}, function(err, appointments){
					res.json(appointments);
				});
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
				Appointment.populate(appointments, {path: "petId", populate: {path: "ownerId"}}, function(err, appointments){
					res.json(appointments);
				});
			}
		});
	});
		
	//Recuperamos una cita a través de la fecha de inicio y la fecha de fin y filtramos los datos:
	router.get('/appointments/:month', function(req, res){
		
		var mes = moment(req.params.month, 'YYYYMM'); 
		
		Appointment.find({dateStart: mes}, function(err, appointments){
			if (err) {
				console.error(err);
				res.sendStatus(500);
			} else {
				Appointment.populate(appointments, {path: "petId", populate: {path: "ownerId"}}, function(err, appointments){
					res.json(appointments);
				});
			}
		});
	});
	
	return router;
}