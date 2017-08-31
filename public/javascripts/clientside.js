let socket = new WebSocket('ws://ec2-18-220-45-149.us-east-2.compute.amazonaws.com:3002');

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
    var theData = JSON.parse(event.data);
    if(theData.type === "active-survey"){
        var urlPathParts = window.location.pathname.split("/");
        var uniqueID = urlPathParts[urlPathParts.length - 2];
        var nameID = urlPathParts[urlPathParts.length - 1];
        
        var firstElement = theData[Object.keys(theData)[0]];
        // console.log(theData);
        var surveyID = theData[parseInt(Object.keys(theData)[0])]['survey_id']
        console.log(surveyID)
        if(Object.keys(theData)[0] === uniqueID){
            console.log('were in it')
            window.location.replace("ws://ec2-18-220-45-149.us-east-2.compute.amazonaws.com" + uniqueID + "/" + nameID + "/" + surveyID);
            // socket.close();
        }
    }
    
  }

//http://localhost:3001/client/" + uniqueID + "/" + nameID + "/" + surveyID
//

//websocket when they get to this address, it does on connection and sends an object 
//with the hostid then each time it gets the request it loads it in