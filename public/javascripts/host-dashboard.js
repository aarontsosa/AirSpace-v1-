let socket = new WebSocket('ws://localhost:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}

// $(window).load( () => {
//     if ($('body').height() - $('.video-holder').height() > 0) {
//         $('.video-holder').css( "height", $('body').height() + 300)
//     }
// }

function addHeaderContent(header, num, array){
    $(header).append($("<th>", {text:"Name"}))
    for(i=0; i<=num; i++){
        console.log(array[0])
        $(header).append($("<th>", {text:array[0].question[i]}))
    }
    return header
}
var test = [{name:"Aaron", result1:"I am okay", result2:"She is good"}, {name:"Tim", result1:"You do you", result2:"Could be better"}, {name:"Nat", result1:"Understand", result2:"Whod o you think?"}]
function addRow(array){
    console.log("hello")
    console.log(array)
    var tr = $('<tr>')
    $(tr).append($("<td>", {text: array.name}))
    for(x=0; x<=2; x++){
        console.log(array[0])
        $(tr).append($("<td>", {text:array.result[x]}))
    };
    return tr
}

function addTableRow(tbody, num, array){
    for(i=0; i<num; i++){
        $(tbody).append(addRow(array[i]))
    }
}

function createResultTable(data) {
    var table = $("<table>", {class:"table table-striped"})
    var thead = $("<thead>")
    var header = $("<tr>")
    var tbody = $("<tbody>")
    var test = [{name:"Aaron", question:{0:"How is She?", 1:"How are you?"}, result:{0:"I am okay", 1:"She is good"}}, {name:"Tim", question:{0:"How is She?", 1:"How are you?"}, result:{0:"You Do you", 1:"Could be better"}}, {name:"Tim", question:{0:"How is She?", 1:"How are you?"}, result:{0:"Who do you Think?", 1:"Understand"}}]
    addHeaderContent(header, 2, data)
    addTableRow(tbody, 3, data)
    $(thead).append(header)
    $(table).append(thead)
    $(table).append(tbody)
    $("[data-target='results-table']").append(table)
}

$("[data-target='results']").on('click', (event) => {
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 2];
    var surveyID = event.target.attributes[2].value
    var resultRequest = {
        type: "survey request",
        request: {
            'ID': uniqueID,
            'survey_id': surveyID 
        }
    }
    // resultRequest = JSON.stringify(resultRequest)
    sendToWebSocket(resultRequest)
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

socket.onmessage((event) => {
    console.log(event)
})

// $("#createsurvey").on('click', (event) => {
//     location.replace(http://localhost:3001/host/{{uniqueid}}/{{id}}/surveynew)
// })
    // message = {
    //     'derp': window.location
    // }
    // console.log(message);
})

