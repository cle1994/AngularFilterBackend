var mongoose = require('mongoose');
var shortId = require('shortid');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name: String,
	classID: String,
	typeIDs: {
		type: Array,
		'default' : []
	},
	_id: {
		type: String,
		unique: true
	}
});

module.exports = mongoose.model('Task', TaskSchema)