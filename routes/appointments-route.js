const Appointment = require('../models/appointments-model');
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
		var fecahFin = moment(req.params.todate, 'YYYYMM');
		
		Appointment.find({dateStart : {"$gte": fechaInicio, "$lt": fechaFin}}, function(err, appointments){
			if (err) {
				console.error(err);
				res.sendStatus(500);
			} else {
				res.json(appointments);
			}
		});
	});
	
	return router;
}