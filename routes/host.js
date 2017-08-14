var express = require('express');
var router = express.Router();
var Id = require("../uniqueID");
var createDB = require("../createHostDatabase");

var uniqueID = Id.giveUniqueId();
console.log(uniqueID)
createDB.createHostDatabase(uniqueID);
// createDB.createHostDatabase();

router.get('/', function(req, res, next) {
    res.render('host', { 
        title: 'Express',
        key: uniqueID
    });

    
  });



// router.post('/', function(req, res, next){
//     console.log('did this work');
// })



module.exports = router;