var mongoose = require('mongoose');

module.exports = mongoose.model('Post',{
   userId: String,
   userName: String,
   passWord: String,
   image: String , //
   comment: String, //
   likeCount: Number, //
   feedbackCount : Number // 
  
});