const intro = require('./index')
const socket = require('./socket')

function main(){
    socket.init()
    intro.startup()
}