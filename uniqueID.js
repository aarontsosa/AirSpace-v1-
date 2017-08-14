function giveUniqueId(){
    let code = ('abcdefghijklmnopqrstuvwxyz0123456789')
    let uniqueId = []
    for(let i = 0; i <= 6; i++) {
        let pick = Math.floor((Math.random() * 62) + 1)
        uniqueId.push(code[pick])
    }
    uniqueIdStr = uniqueId.join("");
    return uniqueIdStr
}

module.exports = {
    giveUniqueId: giveUniqueId   
  };
  