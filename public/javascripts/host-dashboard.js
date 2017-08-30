let socket = new WebSocket('ws://ec2-18-220-45-149.us-east-2.compute.amazonaws.com:3002');

function sendToWebSocket(message){
    socket.send(JSON.stringify(message));
}


function addHeaderContent(header, num, array){
    $(header).append($("<th>", {text:"Name"}))
    for(i=0; i<=num; i++){
        console.log(array[0])
        $(header).append($("<th>", {text:array[0].question[i]}))
    }
    return header
}

function addRow(array){
    var tr = $('<tr>')
    $(tr).append($("<td>", {text: array.name}))
    for(x=0; x<=2; x++){
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
    var table = $("<table>", {class:"table"})
    var thead = $("<thead>")
    var header = $("<tr>")
    var tbody = $("<tbody>")
    addHeaderContent(header, Object.keys(data[0].question).length, data)
    addTableRow(tbody, data.length, data)
    $(thead).append(header)
    $(table).append(thead)
    $(table).append(tbody)
    $("[data-target='results-table']").empty()
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
    var theData = JSON.parse(event.data)
    if(theData['type'] === 'client-connection'){
        if(theData['uniqueID']['ID'].toString() === uniqueID){
            $(`.users`).append(`<p>`+ theData['uniqueID']['name']['client_name'] +`</p>`)
        }     
    }
    if(theData.type === "fullfilledResult" && theData.id === uniqueID){
        console.log(theData)
        createResultTable(theData.fullfilledResult)
    }

}





