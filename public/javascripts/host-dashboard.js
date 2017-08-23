let socket = new WebSocket('ws://localhost:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}

// $(window).load( () => {
//     if ($('body').height() - $('.video-holder').height() > 0) {
//         $('.video-holder').css( "height", $('body').height() + 300)
//     }
// }

// $(document).ready( () => {
//     $('.non-button').click( () => {
        
//     });
// });


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
    var hello = `
    im DEVELOPINGGGG
    `;
    if ($('#active-users').css('display') == 'none') {
        $(elementId).css('display', 'block')
    $('#active-users').html(hello);
    $('#active-users').css({
        border: "1px solid solid white",
        padding: "1rem",
        "font-size": "1rem"
    });
    sendToWebSocket(sendToServer);

// $("#createsurvey").on('click', (event) => {
//     location.replace(http://localhost:3001/host/{{uniqueid}}/{{id}}/surveynew)
// })
    // message = {
    //     'derp': window.location
    // }
    // console.log(message);
})

