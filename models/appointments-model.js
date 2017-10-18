var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
	dateStart: {type: Date, required: true},
	dateEnd: {type: Date, required: true},
	petId: {type: Schema.ObjectId, ref: "Pet", required: true},
	status: {type: String, required: true},	
	note: {type: String}
});

module.exports = mongoose.model('Appointment', appointmentSchema);