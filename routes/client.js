var express = require('express');
var router = express.Router();
var manageDB = require("../managedatabase");
var db = require('../db');
const ws = require('ws');


function sendToWebSocket(message){
        socket.send(JSON.stringify(message));
    }

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
        var socket = new ws('ws://ec2-18-220-45-149.us-east-2.compute.amazonaws.com:3002');
        console.log(result);
        console.log('chris it is srunning')
        var sendToServer = {
            type: 'client-connection',
            'uniqueID': {
                'ID': result.host_id,
                'nameID': result.client_id,
            }
        }
        socket.send(JSON.stringify(sendToServer));
        res.redirect('/client/' + result.host_id + '/' + result.client_id);
        socket.close();
        
    }).catch(console.log)
});

router.get('/:hostid/:name', function(req, res, next){
    res.render('session', { 
        host: req.params.hostid,
        name: req.params.name
    });
})

router.get('/:hostid/:name/:survey', function(req, res, next){
    manageDB.getQuestions(req.params.survey, req.params.hostid).then(result => {
        res.render('survey', {
            question: result,

        })
    })
})

router.post('/:hostid/:name/:survey', function (req, res, next){
    manageDB.addResults(req.body['result'], req.params.name, req.params.survey)
    .then((result) => {
    var resultRequest = {
        type: "survey request",
        request: {
            'ID': req.params.hostid,
            'survey_id': req.params.survey 
        }
    }
    console.log(resultRequest)
    socket.send(JSON.stringify(resultRequest));
    })

    
    res.redirect('/client/' + req.params.hostid + "/" + req.params.name)
    })
    



module.exports = router;