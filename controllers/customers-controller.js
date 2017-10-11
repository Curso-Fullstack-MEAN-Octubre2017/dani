// Dependencies.
var mongoose = require('mongoose');
var Customers = require('../models/customers-model.js');

// GET - Return all registers.
exports.findAll = (req, res) => {
	Customers.find(function(err, customers){
		if(err){
			return res.status(500).send(err.message);
		}else{
			res.json(customers);
		}		
	});
};

// GET - Return a register with specified ID.
exports.findById = (req, res) => {
	Customers.findById(req.params.id, function(err, customer){
		if(err) return res.status(500).send(err.message);
		res.json(customer);
	});
};

// POST - Insert a new register.
exports.add = (req, res) => {
	var customer = new Customers({
		dni : req.body.dni,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phone: req.body.phone,
		email: req.body.email,
		note: req.body.note		
	});
	
	customer.save(function(err, customer){
		if(err){
			return res.status(500).send(err.message);
		}else{
			res.json(customer);
		}		
	});
};

// PUT - Update a register already exists.
exports.update = (req, res) => {
	Customers.findById(req.params.id, function(err, customer) {
		var customer = new Customers({
			name: req.body.name
		});
		customer.save(function(err) {
			if(err){
				return res.status(500).send(err.message);
			}else{
				res.json(customer);
			}			
		});
	});
};

// DELETE - Delete a register with specified ID.
//exports.delete = (req, res) => {
//	Customers.findById(req.params.id, function(err, customer){
//		customer.remove(function(err){
//			if(err){
//				return res.status(500).send(err.message);
//			}else{
//				res.send();
//			}			
//		});
//	});
//};