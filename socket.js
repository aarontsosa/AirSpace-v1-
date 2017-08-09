const ws = require('ws')
const server = new ws.Server({port:8888})

function broadcast (message) {
    server.clients.forEach( (client) => {
      client.send(message);
  })
}

function init(callback) {
  server.on('connection', (socket) => {
  })
}

module.exports = {
  broadcast: broadcast,
  init: init
};