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



socket.onmessage = function (event) {
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    var nameID = urlPathParts[urlPathParts.length - 1];
    var theData = JSON.parse(event.data);
    var firstElement = theData[Object.keys(theData)[0]];
    var surveyID = theData[parseInt(Object.keys(theData)[0])]['survey_id']
    console.log(surveyID)
    if(Object.keys(theData)[0] === uniqueID){
        console.log('were in it')
        window.location.replace("http://localhost:3001/client/" + uniqueID + "/" + nameID + "/" + surveyID);
    }
  }

//http://localhost:3001/client/" + uniqueID + "/" + nameID + "/" + surveyID