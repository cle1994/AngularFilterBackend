var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SwatchSchema = new Schema({
	title: String,
	pitch: String,
	links: {
		type: Array,
		'default' : []
	}
	color: {
		type: Array,
		'default' : []
	}

});

module.exports = mongoose.model('Swatch', SwatchSchema)