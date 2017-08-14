var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
    res.render('client', { title: 'Express' });
  });

router.post('/', function(req, res, next) {
    db.one(`
        insert into j6zd ${}(name)
            values ('tim5')

    `).catch(console.log);
});




module.exports = router;