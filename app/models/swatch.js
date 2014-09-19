var mongoose = require('mongoose');
var shortId = require('shortid');
var Schema = mongoose.Schema;

var SwatchSchema = new Schema({
	name: String,
	blurb: String,
	links: {
		type: Array,
		'default' : []
	},
	color: {
		type: Array,
		'default' : []
	},
	_id: {
		type: String,
		unique: true
	}
});

module.exports = mongoose.model('Swatch', SwatchSchema)