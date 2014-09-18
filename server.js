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


router.use(function(req, res, next) {
	console.log('use function');
	next();
});


router.get('*', function(req, res) {
	res.sendfile('./public/views/index.html');
});

router.route('/swatch')
	.post(function(req, res) {
		var swatch = new Swatch();
		swatch.name = req.body.name;
		swatch.blurb = req.body.blurb;
		swatch.color = req.body.color;
		swatch.link = req.body.link;
		swatch.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message : 'Swatch created!'});
		});

	})

	.get(function(req, res) {
		Swatch.find(function(err, bears) {
			if (err)
				res.send(err);
			res.json(swatch);
		});
	});

// router.route('/swatch/:swatchid')

// 	.get(function(req,res) {

// 	});

//register routes
app.use('/api', router);

//start
app.listen(port);
console.log('app up');






