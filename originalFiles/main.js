const HorP = require('./index.js')
const socket = require('./socket.js')

function main(){
    socket.init(HorP.startUp())
    
}

main()