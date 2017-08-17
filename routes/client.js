var express = require('express');
var router = express.Router();
var db = require('../db');
const ws = require('ws');

router.get('/', function(req, res, next) {
    res.render('client', { title: 'Express' });
  });

router.post('/', function(req, res, next) {
    res.redirect('/client/' + req.body['host-id']);  
});

router.get('/:hostid', function(req, res, next){
    res.render('session', { title: 'Thanks for connecting' });
})



module.exports = router;