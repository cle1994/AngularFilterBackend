var express             = require('express');
var bodyParser          = require('body-parser');
var mongoose            = require('mongoose');
var shortId             = require('shortid');
var methodOverride      = require('method-override');
var app                 = express(); //create server

// Port
var port = process.env.PORT || 8080;
// Mongodb
mongoose.connect('mongodb://christianle:helloworld@ds041140.mongolab.com:41140/filteringtasks');

// Static files
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());

// Bodyparser/Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.set("jsonp callback", true);

// Router
// Backend routes
var router = express.Router();
var Task = require('./app/models/task');
var Type = require('./app/models/type');
var Clas = require('./app/models/class');

router.use(function(req, res, next) {
    console.log('Middleware');
    next();
});

router.route('/types')
    .get(function(req, res) {
        Type.find(function(err, types) {
            if (err) {
                res.send(err);
            } else {
                res.jsonp(types);
            }
        });
    })
    .post(function(req, res) {
        var type = new Type();
        type.name = req.body.name;
        type._id = shortId.generate();

        type.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ typeid: type._id });
            }
        });
    });

router.route('/types/:typeid')
    .get(function(req,res) {
        Type.findById(req.params.typeid, function(err, type) {
            if (err) {
                res.send(err);
            } else {
                res.jsonp(type);
            }
        });
    });

router.route('/tasks')
    .get(function(req, res) {
        Task.find(function(err, tasks) {
            if (err) {
                res.send(err);
            } else {
                res.jsonp(tasks);
            }
        });
    })
    .post(function(req, res) {
        var task = new Task();
        task.name = req.body.name;
        task.classID = req.body.classID;
        task.typeIDs = req.body.typeIDs;
        task._id = shortId.generate();

        task.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ taskid: task._id });
            }
        });
    });

router.route('/tasks/:taskid')
    .get(function(req,res) {
        Task.findById(req.params.taskid, function(err, task) {
            if (err) {
                res.send(err);
            } else {
                res.jsonp(task);
            }
        });
    })
    .post(function(req, res) {
        var task = new Task();
        task.name = req.body.name;
        task.classID = req.body.classID;
        task.typeIDs = req.body.typeIDs;
        task._id = shortId.generate();

        task.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ taskid: task._id });
            }
        });
    });


router.route('/classes')
    .get(function(req, res) {
        Clas.find(function(err, classes) {
            if (err) {
                res.send(err);
            } else {
                res.jsonp(classes);
            }
        });
    })
    .post(function(req, res) {
        var clas = new Clas();
        clas.name = req.body.name;
        clas._id = shortId.generate();

        clas.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ clasid: clas._id });
            }
        });
    });

router.route('/classes/:classid')
    .get(function(req,res) {
        Clas.findById(req.params.classid, function(err, clas) {
            if (err) {
                res.send(err);
            } else {
                res.json(clas);
            }
        });
    });

app.use('/api', router);

//start
app.listen(port);
console.log('Server Running');
