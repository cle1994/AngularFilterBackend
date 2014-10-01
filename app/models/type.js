var mongoose = require('mongoose');
var shortId = require('shortid');
var Schema = mongoose.Schema;

var TypeSchema = new Schema({
  name: String,
  _id: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('Type', TypeSchema)