var express = require('express');
var router = express.Router();
var manageDB = require("../managedatabase");
var db = require('../db');
const ws = require('ws');

router.get('/', function(req, res, next) {
    res.render('client', { title: 'Express' });
  });

router.post('/', function(req, res, next) {
    host_id = req.body['host-id']
    name_id = req.body['client-name']
    client = {
        client_name: name_id,
        host_id: host_id
    }
    manageDB.addClientName(client).then(result =>{ 
        res.redirect('/client/' + result.host_id + '/' + result.client_id);
    })
});

router.get('/:hostid/:name', function(req, res, next){
    res.render('session', { 
        host: req.params.hostid,
        name: req.params.name
    });
})

router.get('/:hostid/:name/:survey', function(req, res, next){
    manageDB.getQuestionAnswer(req.params.survey, req.params.hostid).then(result => {
        var QA = {}
        var card =[]
        result.forEach(function(array) {
            manageDB.getQuestions(array.question_id).then(result => {
                console.log(result.question)
                card.push(result.question)
                console.log(QA)
            })
            manageDB.getAnswers(array.answer_id).then(result => {
                console.log(result.answer)
                QA.answer = result.answer
                console.log(QA)
            })
        return card
        });
    })
    card = [ {anonymous:{question: "DOG OR CAT", answer: "CAT"}}, {anonymous:{question: "GA OR FL", answer: "FL"}}]
    res.render('session', {
        card: card,
    })
})



module.exports = router;