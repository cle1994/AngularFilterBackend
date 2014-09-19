var express             = require('express');
var bodyParser          = require('body-parser');
var mongoose            = require('mongoose');
var shortId             = require('shortid');
var methodOverride      = require('method-override');
var app                 = express(); //create server

// Port
var port = 8888;
// Mongodb
mongoose.connect('mongodb://emto:pokemon@ds033740.mongolab.com:33740/testing');

// Static files
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());

// Bodyparser/Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Router
// Backend routes
var router = express.Router();
var Swatch = require('./app/models/swatch');

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
        _id = shortId.generate();

        swatch.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'Swatch created!' });
            }
        });
    });

router.route('/swatches/:swatchid')
    .get(function(req,res) {
        Swatch.findById(req.params.swatchid, function(err, swatch) {
            if (err) {
                res.send(err);
            } else {
                res.json(swatch);
            }
        });
    });

app.use('/api', router);

// Router
// Frontend Route
app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
router.get('*', function(req, res) {
    res.sendfile('/public/index.html');
});

//start
app.listen(port);
console.log('Server Running');
