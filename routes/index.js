var express = require('express');
var router = express.Router();
var Id = require("../uniqueID");


var uniqueID = Id.giveUniqueId();

// createDB.createHostDatabase();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AirTV', uniqueID: uniqueID});

});

module.exports = router;
