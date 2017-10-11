// Dependencies.
var customerController = require('../controllers/customers-controller.js');

// Opens App Routes
module.exports = function(express, app){
	
	// HOME
	app.get('/', function(req, res, next){
		res.sendfile('./public/index.html');
	});
	
	// API
	var api = express.Router();
	
	// Customers
	api.route('/customers')
		.get(customerController.findAll)
		.post(customerController.add);
	api.route("/customers/:id")
		.get(customerController.findById)
		.put(customerController.update)
		.delete(customerController.delete);
	app.use('/api/customers-module');
	
};



//var express = require('express');
//var router = express.Router();
//
//router.get('/customers-module', function(req, res, next){
//	
//});
//
//module.exports = router;