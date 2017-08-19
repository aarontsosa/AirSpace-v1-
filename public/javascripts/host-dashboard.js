let socket = new WebSocket('ws://localhost:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}

$("[data-target='results']").on('click', (event) => {
    var table = $('<head>', {class: "table table-striped"})
    var thead = $('<thead>')
    // $(thead).append($('tr'))
    // $(thead).append($('th', {text: 'First Name'}))
    // $(thead).append($('th'))
    // $(thead).append($('th'))
    // $(table).append(thead)
    $(".tablehost").append(table)
})

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

// $("#createsurvey").on('click', (event) => {
//     location.replace(http://localhost:3001/host/{{uniqueid}}/{{id}}/surveynew)
// })
    // message = {
    //     'derp': window.location
    // }
    // console.log(message);
})

