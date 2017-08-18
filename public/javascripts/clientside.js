let socket = new WebSocket('ws://localhost:3002');

console.log("hello")
function format(data){
    var dataObject = {};
    dataObject['id'] = uniqueID;
    data.serializeArray().forEach(function(key){
        dataObject[key.name] = key.value;
    })
    return dataObject;
}


// $("[data-target='connect-to-host']").on('click', function(event){
//     host_id = $("[data-target='host_id']")[0].value
//     name_id = $("[data-target='name_id']")[0].value
//     client = {
//         type: "client join",
//         client_name: name_id,
//         host_id: host_id
//     }
//     sendToWebSocket(client)
// })

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}
