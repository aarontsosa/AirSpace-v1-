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
      console.log(Object.keys(receivedData) + 'this is recieved data');
      broadcast(JSON.stringify(receivedData));
      
    // if(receivedData.type === 'submit-survey'){
    //   console.log('it sent');
    //   manageDB.addSurveyToDatabase(receivedData['Survey-Name'])
    //   manageDB.addQuestionsToDatabase(receivedData);
    //   manageDB.addAnswersToDatabase(receivedData);
    // };
    // if (receivedData.type === "client join"){
    //   manageDB.addClientName(receivedData.client_name)
    // } 
    })
  })
  // wsServer.on('message', (socket)=>{
  //     console.log('received message')
  //     console.log(socket);
  // })
  

}



module.exports = {
  broadcast: broadcast,
  init: init
 
};