var express = require('express');
var router = express.Router();
var createDB = require("../createHostDatabase");




router.get('/:uniqueid', function(req, res, next) {

    createDB.createHostDatabase(req.params.uniqueid);
    res.render('host', { 
        title: 'Host Page',
        key: req.params.uniqueid

    });
  });

router.post('/:uniqueid', function(req, res, next){
    // console.log('it worked')

    // res.redirect(uniqueID + '/survey-create/');
    res.render('survey-create', {
        title: 'Create a Survey'
    });

});

// router.post('/', function(req, res, next){
//     console.log('did this work');
// })



module.exports = router;