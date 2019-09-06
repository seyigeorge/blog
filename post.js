var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
	addPost: function(name, content, callback){
		MongoClient.connect(url, function(err, db) {
		  	db.collection('post').insertOne( {
				"name": name,
				"content": content
			},function(err, result){
				assert.equal(err, null);
		    	console.log("Saved the blog post details.");
		    	if(err == null){
		    		callback(true)
		    	}
		    	else{
		    		callback(false)
		    	}
			});
		});
	},
	getPost: function(callback){
		
		MongoClient.connect(url, function(err, db){
			 db.collection('post', function (err, collection) {
		        collection.find().toArray(function (err, list) {
		            callback(list);
		        });
		     });
		})
	}
}