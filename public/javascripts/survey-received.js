

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}

$( document ).ready(function() {
    console.log('this is sending a message from the client')
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    console.log(uniqueID + 'uniqueid')
    var nameID = urlPathParts[urlPathParts.length - 1];
    console.log(nameID +'name id')
    var sendToServer = {
        type: 'client-connection',
        [uniqueID]: {
            'ID': uniqueID,
            'nameID': nameID,
        }
    }
    sendToWebSocket(sendToServer);
});
