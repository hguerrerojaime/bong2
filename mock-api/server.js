var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = express.Router();
var pipes = require('../gulp/pipes');
var mongo = require('./mongo');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(cors({origin: 'http://localhost:3000'}));


router.get('/', function(req, res) {  
   res.status(200).jsonp({
   		appName:"Mock API"
   });
});

router.post('/user',function(req,res) {

	mongo.execute(function(db) {
		db.collection('user').insert(req.body, function(err, r) {
			console.log(r);
			res.status(200).jsonp(r.ops[0]);
			db.close();
		});
	});

});

router.get('/user/lookup',function(req,res) {

	mongo.execute(function(db) {
		db.collection('user').find({}).toArray(function(err, docs) {


			var lookupOpts = docs.map(function(item) {
				return {
					id: item._id,
					key: item.key,
					value: item.name 
				}
			});

			res.status(200).jsonp(lookupOpts);
			db.close();
		});
	});

});

router.get('/user/lookup/:key',function(req,res) {

	mongo.execute(function(db) {
		db.collection('user').find({ key: req.params.key }).toArray(function(err, docs) {

			var lookupOpts = docs.map(function(item) {
				return {
					id: item._id,
					key: item.key,
					value: item.name 
				}
			});

			res.status(200).jsonp(lookupOpts.length > 0 ? lookupOpts[0] : null);
			db.close();
		});
	});

});

app.use(router);


pipes.runMockApi = function() {
	app.listen(3001, function() {  
	  console.log("Node server running on http://localhost:3001");
	});
};

