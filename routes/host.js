var express = require('express');
var router = express.Router();
var manageDB = require("../managedatabase");

router.get('/:uniqueid', function(req, res, next) {

    manageDB.addHostToDatabase(req.params.uniqueid).then((result)=>{
        res.redirect(`/`+ 'host' + '/' + req.params.uniqueid + "/" + result)
    });
    
    
  });

router.get(`/:uniqueid/:id`, function(req, res, next){
    res.render('host', { 
        title: 'Host Page',
        key: req.params.uniqueid,
        // id: req.params.host_id
    
    });
});

router.post('/:uniqueid/:id', function(req, res, next){
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