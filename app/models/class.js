var mongoose = require('mongoose');
var shortId = require('shortid');
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
  name: String,
  _id: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('Clas', ClassSchema)