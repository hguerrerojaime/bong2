var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/crm-ui';

module.exports = {
	execute: function(task) {
		MongoClient.connect(url,function(err,db){

			if (err == null) {
				task(db);
			} else {
				console.error(err);
			}

		});
	}

};