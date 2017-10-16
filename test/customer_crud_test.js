/**
 * 
 */
const Customer = require('../models/customers-model');
const Pet = require('../models/pets-model');

var mikiCustomer = {
		"dni": "63215498Z",
		"firstName": "Miki",
		"lastName": "Lopez",
		"phone": "632154987",
		"email": "miki@lopez.com",
		"note": "A mi derecha"
	};

var pet1 = 	{
		"name" : "Tardar Sauce",
		"birthdate" : "2012-04-21",
		"specie" : "Cat",
		"race" : "Snowshoe",
		"chipNumber" : "0003219",
		"photoUrl" : "asdf",
		"description" : "Un fenómeno de internet.",
		"ownerId" : "59dc914e49400a2348e35e85"
	};

function testInsertMiki() {
	const customer = new Customer(mikiCustomer);
	customer.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertMiki", customer);
		}
	})
}

function testInsertPet() {
	const pet = new Pet(pet1);
	pet.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertPet", pet);
		}
	})
}

function testSearchCustomers() {
	var search = {};
	var regexp = new RegExp("gonzalez", "i")
	search.firstName = regexp;
	search.lastName = regexp;
	console.log("Search customers:", search);
	
	Customer.find(search, (err, customers) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testSearchCustomers", customers);
		}
	}).sort({'_id' : -1});
}

//testInsertMiki();
testInsertPet();
//testSearchCustomers();