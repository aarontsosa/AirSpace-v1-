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

    res.redirect(`/host/${req.params.uniqueid}/${req.params.id}/new`);
    // res.render('survey-create', {
    //     title: 'Create a Survey',
    //     key: req.params.uniqueid,
    //     id: req.params.id

    // });
    // res.redirect(`/`+ 'host' + '/' + req.params.uniqueid + "/" + req.params.id + "/" + 'new');

    
    

});
router.get('/:uniqueid/:id/new', function(req, res, next){
    console.log('we are here');
    res.render('survey-create', {
        title: 'Create a Survey',
        uniqueid: req.params.uniqueid,
        id: req.params.id
    });
});

// router.get('/:uniqueid/:id/new', function (res, req, next){
//     res.render('host-dashboard',{
//         title: "Host Page",
//         uniqueid: req.params.uniqueid,
//         id: req.params.id
//         // id: req.params.id
//     })
// })
router.post('/:uniqueid/:id/new', function(req, res, next){
    // res.redirect(`${req.params.id}/new`);
    console.log('is this running');
    manageDB.sendFormDataToDB(req.body, req.params.id);
    //we went to the database now we want to redirect to host-dashboard
    res.render('host-dashboard',{
        title: "Host Page",
        uniqueid: req.params.uniqueid,
        id: req.params.id
        // id: req.params.id
    })
    
    
    

})

// router.post('/', function(req, res, next){
//     console.log('did this work');
// })



module.exports = router;