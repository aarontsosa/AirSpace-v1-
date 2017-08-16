const ws = require('ws');
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
      console.log(event.data);
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