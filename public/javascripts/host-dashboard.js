let socket = new WebSocket('ws://localhost:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}

// $(window).load( () => {
//     if ($('body').height() - $('.video-holder').height() > 0) {
//         $('.video-holder').css( "height", $('body').height() + 300)
//     }
// }


$("[data-target='activate-survey']").on('click', (event) =>{
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    var surveyID = event.target.attributes[2].value
    var sendToServer = {
        type: "active-survey",
        [uniqueID]: {
            'ID': uniqueID,
            'survey_id': surveyID 
        }
    }
    sendToWebSocket(sendToServer);
})

socket.onmessage = function (event) {
    console.log('we have recieved a message');
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    
    var nameID = urlPathParts[urlPathParts.length - 1];
    var theData = JSON.parse(event.data);
    console.log('we made it');
    // console.log('DID WE MAKE IT?' + theData['type'] === 'client-connection')
    if(theData['type'] === 'client-connection'){
        $("<p>").append(theData[uniqueID]);
        console.log('yes we made it')
    }
}


// $("#createsurvey").on('click', (event) => {
//     location.replace(http://localhost:3001/host/{{uniqueid}}/{{id}}/surveynew)
// })
    // message = {
    //     'derp': window.location
    // }
    // console.log(message);


