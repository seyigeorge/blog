var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var post = require('./post');

var app = express();



app.use(express.static(path.join(__dirname,"./frontend/public")));

app.use(bodyParser.json());

app.get('/', function(req,res){
  res.sendFile(__dirname + '/public/index.html');
})
  


app.post('/addpost', function (req, res) {
  var name = req.body.name;
  var content = req.body.content;
  post.addPost(name, content ,function(result){
    res.send(result);
  });
})

app.post('/getpost', function (req, res) {
  post.getPost(function(result){
    res.send(result);
  });
})


app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})