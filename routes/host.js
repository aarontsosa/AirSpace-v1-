var express = require('express');
var router = express.Router();
var manageDB = require("../managedatabase");

router.get('/:uniqueid', function(req, res, next) {

    manageDB.addHostToDatabase(req.params.uniqueid);
    manageDB.grabHostID(req.params.uniqueid);
    res.render('host', { 
        title: 'Host Page',
        key: req.params.uniqueid

    });
  });

router.post('/:uniqueid', function(req, res, next){
    // console.log('it worked')

    // res.redirect(uniqueID + '/survey-create/');
    res.render('survey-create', {
        title: 'Create a Survey',
        key: req.params.uniqueid
    });

});

// router.post('/', function(req, res, next){
//     console.log('did this work');
// })



module.exports = router;