/**
 * 
 */
const Customer = require('../models/customers-model');

var mikiCustomer = {
		"dni": "63215498Z",
		"firstName": "Miki",
		"lastName": "Lopez",
		"phone": "632154987",
		"email": "miki@lopez.com",
		"note": "A mi derecha"
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

testInsertMiki();
//testSearchCustomers();