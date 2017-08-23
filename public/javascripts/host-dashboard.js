let socket = new WebSocket('ws://localhost:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}


$("[data-target='activate-survey']").on('click', (event) =>{
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    var surveyID = event.target.attributes[2].value
    var sendToServer = {
        [uniqueID]: {
            'ID': uniqueID,
            'survey_id': surveyID 
        }
    }
    sendToWebSocket(sendToServer);

    
});

