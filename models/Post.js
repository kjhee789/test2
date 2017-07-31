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
   image: String , //
   comment: String, //
   likeCount: Number, //
   likeIds:[String],
   feedbackCount : Number, //
   createdDate : { type: Date, required: true, default: Date.now }
});
