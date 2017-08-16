var express = require('express');
var router = express.Router();
var Id = require("../uniqueID");




// createDB.createHostDatabase();


/* GET home page. */
router.get('/', function(req, res, next) {
  var uniqueID = Id.giveUniqueId();
  res.render('index', { title: 'AirTV', uniqueID: uniqueID});

});


module.exports = router;
