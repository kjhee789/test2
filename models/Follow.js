/*------------------------------------------------------------------------------    
    Subject: Web Design
    Project: Instagram Clone
         By: Junghoon Lee, Jihee Kim, Serhii Sukhin
            Added on June 2017
-------------------------------------------------------------------------------*/
var mongoose = require('mongoose');

module.exports = mongoose.model('Follow',{
   userId: String,
   followId: String
  
});