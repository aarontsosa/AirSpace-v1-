let socket = new WebSocket('ws://localhost:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}

$("[data-target='activate-survey']").click(()=>{
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    var surveyID = $("[data-target='activate-survey']").data("survey-id");
    console.log(urlPathParts);
    console.log(surveyID);
    var sendToServer = {
        [uniqueID]: {
            'ID': uniqueID,
            'survey_id': surveyID 
        }
    }
    sendToWebSocket(sendToServer);


    // message = {
    //     'derp': window.location
    // }
    // console.log(message);
})

