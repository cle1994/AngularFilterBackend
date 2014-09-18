var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var shortid = require('shortid');
var app = express(); //create server
var methodOverride = require('body-parser');
var Swatch = require('./app/models/swatch');

//set our port
var port = 8888;

//connect to db
mongoose.connect('mongodb://emto:pokemon@ds033740.mongolab.com:33740/testing');

//create app with bodyparser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

//create our router
var router = express.Router();

router.use(function(req, res, next) {
	console.log('Middleware');
	next();
});

router.route('/swatches')
	.get(function(req, res) {
		Swatch.find(function(err, swatches) {
			if (err) {
				res.send(err);
			} else {
				res.json(swatches);
			}
		});
	})
	.post(function(req, res) {
    var swatch = new Swatch();
    swatch.name = req.body.name;
    swatch.blurb = req.body.blurb;
    swatch.links = req.body.links;
    swatch.color = req.body.color;

    swatch.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Swatch created!' });
      }
    });
  });

// router.route('/swatch/:swatchid')

// 	.get(function(req,res) {

// 	});

//register routes
app.use('/api', router);

router.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

//start
app.listen(port);
console.log('app up');






