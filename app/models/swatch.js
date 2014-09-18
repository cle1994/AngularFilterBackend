var mongoose = require('mongoose');
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
	}
});

module.exports = mongoose.model('Swatch', SwatchSchema)