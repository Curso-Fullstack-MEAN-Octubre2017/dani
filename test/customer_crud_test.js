/**
 * 
 */
const Customer = require('../models/customers-model');
const Pet = require('../models/pets-model');
const Appointment = require('../models/appointments-model');
var moment = require('moment');

//var app2 = {
//		"dateStart": "2017-10-03T16:00:00.000Z",
//		"dateEnd" : "2017-10-03T17:00:00.000Z",
//		"petId" : "59e0ad1714e88304c8539f25",
//		"status" : "0",
//		"note" : "segunda vacuna"
//}


//var inicio = moment("2017-10-15T09:00:00Z");
//var fin =   moment("2017-10-15T09:30:00Z");
//
//	for(var i=0;i<=24;i++){
//	
//		var sampleApp = {
//				"dateStart": inicio,
//				"dateEnd": fin,
//				"petId": "59e0ad1714e88304c8539f25",
//				"status": "0",
//				"note" : "revisión " + i
// 			};
//		
//		inicio = moment(inicio).add(30,'m');
//		fin = moment(fin).add(30,'m');
//		
//	    	testInsertApp();
//
//	}
//
//function testInsertApp() {
//	const app = new Appointment(sampleApp);
//	app.save((err) => {
//		if (err) {
//			console.error(err);
//		} else {
//			console.log("testInsertApp", app);	
//		}
//	})
//}

//var mikiCustomer = {
//		"dni": "63215498Z",
//		"firstName": "Miki",
//		"lastName": "Lopez",
//		"phone": "632154987",
//		"email": "miki@lopez.com",
//		"note": "A mi derecha"
//	};
//
var pet1 = 	{
		"name" : "Pocholo",
		"birthdate" : "2012-04-21",
		"specie" : "Canarian",
		"race" : "Indefinida",
		"chipNumber" : "0003242",
		"photoUrl" : "fsda",
		"description" : "Amante del dulce",
		"ownerId" : "59e0a7b3c8bb1d1b24e00e33"
	};

//function testInsertMiki() {
//	const customer = new Customer(mikiCustomer);
//	customer.save((err) => {
//		if (err) {
//			console.error(err);
//		} else {
//			console.log("testInsertMiki", customer);
//		}
//	})
//}
//
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

//function testSearchCustomers() {
//	var search = {};
//	var regexp = new RegExp("gonzalez", "i")
//	search.firstName = regexp;
//	search.lastName = regexp;
//	console.log("Search customers:", search);
//	
//	Customer.find(search, (err, customers) => {
//		if (err) {
//			console.error(err);
//		} else {
//			console.log("testSearchCustomers", customers);
//		}
//	}).sort({'_id' : -1});
//}

//testInsertMiki();
testInsertPet();
//testInsertAppointment();
//testSearchCustomers();