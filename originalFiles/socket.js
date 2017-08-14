const ws = require('ws')
const server = new ws.Server({ port:8888 });


function init(callback) {
  server.on('connection', (socket) => {
    socket.send("hello")
    socket.send(callback)
  })
}

module.exports = {
  init: init
};