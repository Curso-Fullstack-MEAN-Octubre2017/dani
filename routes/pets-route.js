const Pet = require('../models/pets-model');
//const Utils = require("../utils/utils.js");
//const Validators = require("../public/app/validation/validators.js");

module.exports = (router) => {

	/**
	 * FindAll
	 */
	router.get('/pets', function(req, res, next) {
		Pet.find({}, (err, pets) => {
			if (err) {
				console.error(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(pets);
			}
		}).sort({'_id' : -1});
	});


	/**
	 * Get one
	 */
	router.get('/pets/:id', function(req, res) {
		Pet.findById(req.params.id, function(err, pet) {
			if (err) {
				console.error(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(pet);
			}
		});
	});


	/**
	 * Insert
	 */
	router.post('/pets', (req, res, next) => {
		const pet = new Pet(req.body);
//		const validationErrors = Validators.validatePet(pet);
//		if(validationErrors) {
//			return res.status(400).send(validationErrors);
//		}
		pet.save((err) => {
			if (err) {
				console.error(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(pet);
			}
		})
	});
	
	/**
	 * Update
	 */
	router.put('/pets/:id', (req, res, next) => {
		Pet.findOne({_id : req.params.id }, function(err, pet) {
			if (err) {
				return res.send(err);
			}

			// rellenamos los datos que vienen en la peticion
			for(prop in req.body){
				pet[prop] = req.body[prop];
			}
			
			console.log("Actualizando pet", pet);
			
//			const validationErrors = Validators.validatePet(pet);
//			if(validationErrors) {
//				return res.status(400).send(validationErrors);
//			}

			// save
			pet.save(function(err) {
				if (err) {
					console.error(err);
					res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
				} else {
					res.json(pet);
				}
			});
		});
	});	
	
	/**
	 * Get one
	 */
	router.delete('/pet/:id',function(req, res) {
		console.log("/pets/" + req.params.id);
		Pet.findByIdAndRemove(req.params.id, function(err, pet) {
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
