const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const sessions = []

rl.question('Host or Player? ', (answer) => {
    if (answer === "Host") {
        let uniqeID = giveUniqeId()
        sessions.push(uniqeID)
        console.log(uniqeID)
        console.log(sessions)
    } else if (answer === "Player") {
        rl.question('Type in UniqeID: ', (ID) => {
            validateID(ID)
        })
    } 
})

function giveUniqeId(){
    let code = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
    let uniqeID = []
    for(let i = 0; i <= 6; i++) {
        let pick = Math.floor((Math.random() * 62) + 1)
        uniqeID.push(code[pick])
    }
    uniqeIDStr = uniqeID.join("");
    return uniqeIDStr
}

function validateID(ID){
    debugger
    join = false
    sessions.forEach((BLUE) => {
        if(ID === BLUE){
            join = true
        }
    })
    if (join){
        console.log("joining ... ")
    } else {
        console.log("no key found.")
    }
}