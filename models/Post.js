/*------------------------------------------------------------------------------    
    Subject: Web Design
    Project: Instagram Clone
         By: Junghoon Lee, Jihee Kim, Serhii Sukhin
             Created on May 2017
-------------------------------------------------------------------------------*/
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