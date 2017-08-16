function giveUniqueId(){
    let code = ('abcdefghijklmnopqrstuvwxyz0123456789')
    var uniqueId = []
    for(let i = 0; i <= 6; i++) {
        let pick = Math.floor((Math.random() * 36) + 1);
        uniqueId.push(code[pick])
    }
    uniqueIdStr = uniqueId.join("");
    console.log(uniqueIdStr);
    return uniqueIdStr
}

module.exports = {
    giveUniqueId: giveUniqueId   
  };
  