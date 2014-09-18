var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var shortid = require('shortid');
var app = express(); //create server
var Swatch = require('./app/models/swatch');

//set our port
var port = 8888;

//connect to db
mongoose.connect('mongodb://emto:pokemon@ds033740.mongolab.com:33740/testing');

//create app with bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//create our router
var router = express.Router();



router.get('*', function(req, res) {
	
})

router.route('/swatch')

--> post
--> get all

router.route('/swatch/:swatchid')

	.get(function(req,res) {

	});

//register routes
app.use('/api', router);

//start
app.listen(port);







