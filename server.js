//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var Post = require('./models/post');
var Follow = require('./models/follow');
//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
//-->

mongoose.connect('mongodb://jiheekim:1qa2ws3ed@ds064799.mlab.com:64799/web_dev');
/*
var post = new Post({
  image:'./img/sample1.jpg',
  comment: 'cool icon',
  likeCount:0,
  feedbackCount:0
  });
  
post.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved.');
  }
});  
*/
/*
var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
//<--
*/
router.post('/posts',function(req, res){
 /* not completed 
  console.log('post request');
  var followsArray;
  Follow.find({userId:"kjh@gmail.com"}).select("followId")
  .then(function(paths){
   console.log(JSON.stringify(paths));
  })
  .catch(function(err){
    console.log(err);
    //Post.find({userId:{$in:followsArray}})
  })
  */
  Post.find()
  .then(function(paths){
    console.log('post response ');
    res.json(paths);
  })
  .catch(function(err){
    console.log(err);
  })
 
});
router.post('/follows',function(req, res){
  console.log('follows request');
  
  Follow.find({userId:"kjh@gmail.com"}).select("followId")
  .then(function(paths){
    console.log('post response ');
    console.log(paths);
    res.json(paths);
  })
  .catch(function(err){
    console.log(err);
  })
});

router.post('/incrLike', function(req, res){
  console.log('increment like for ' + req.body.id);
  
  Post.findById(req.body.id)
  .then(function(post){
    post.likeCount++;
    return post.save(post);
  })
  .then(function(post){
    res.json({id: req.body.id, count: post.likeCount});
  })
  .catch(function(err){
    console.log(err);
  })
});

//notifying static location
router.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
