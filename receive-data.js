const ws = require('ws');
var manageDB = require("./managedatabase");


// const server = require("./server")

const PORT = 3002; // Put in a real port number
let wsServer;

function broadcast (message) {
  wsServer.clients.forEach((client)=>{
    client.send(message);
  });
}

function init(callback) {
  console.log('init ran')
  wsServer =  new ws.Server({ port: PORT });
  // Whatever callback gets passed in
  // It has access to the socket
  wsServer.on('connection', (socket) => {
    console.log("socket connection made");
    socket.on('message', (event)=>{
      console.log('we got a message');
      var receivedData = JSON.parse(event);
      console.log(receivedData.type)
      
      if(receivedData.type === "survey request"){
        console.log("hello2")
        manageDB.getClientResults(receivedData.request['ID'], receivedData.request['survey_id']).then(result => {
          fullfilledResult = []
          manageDB.formatNamesResults(result)
          manageDB.formatQuestionResults(fullfilledResult, result)
          sendoff = {type: "fullfilledResult", fullfilledResult}
          console.log(sendoff)
          broadcast(JSON.stringify(sendoff));
        })
      }
      if(receivedData.type === "client-connection"){
        return manageDB.getName(receivedData['uniqueID']['nameID'], receivedData['uniqueID']['ID']).then(result =>{
          return name = {
            type: "client-connection",
            'uniqueID': {
              'ID': receivedData['uniqueID']['nameID'],
              'nameID': receivedData['uniqueID']['nameID'],
              'name': result,
            }
          }
        }).then(result2=>{
          broadcast(JSON.stringify(result2));
        });
      }
      else{
        broadcast(JSON.stringify(receivedData));
      }
    })
  })
}
      
      
    // if(receivedData.type === 'submit-survey'){
    //   console.log('it sent');
    //   manageDB.addSurveyToDatabase(receivedData['Survey-Name'])
    //   manageDB.addQuestionsToDatabase(receivedData);
    //   manageDB.addAnswersToDatabase(receivedData);
    // };
    // if (receivedData.type === "client join"){
    //   manageDB.addClientName(receivedData.client_name)
    // } 
    // })
  // })
  // wsServer.on('message', (socket)=>{
  //     console.log('received message')
  //     console.log(socket);
  // })
  







module.exports = {
  broadcast: broadcast,
  init: init
 
};