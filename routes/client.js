var express = require('express');
var router = express.Router();
var db = require('../db');
const ws = require('ws');

router.get('/', function(req, res, next) {
    res.render('client', { title: 'Express' });
  });

router.post('/', function(req, res, next) {
    // res.render(res.body)
    var entry = req.body['host-id'];
    res.redirect('/client/' + req.body['host-id']);
    
    db.one(`
        insert into ${req.body['host-id']}(name)
            values ('${req.body['client-name']}')

    `).catch(console.log);
    
});

router.get('/:hostid', function(req, res, next){
    res.render('session', { title: 'Thanks for connecting' });
})



module.exports = router;