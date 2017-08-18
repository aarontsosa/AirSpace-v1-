let socket = new WebSocket('ws://localhost:3002');

var counter = 0
function createTextBox(){
    var location = $("[data-target='question-list']")
    counter ++;
    var p = $("<p></p>");
    var questionText= "Question " + (counter)+ ": "
    var answerText = " Answer " + (counter)+ ": "
    var question = $("<div>", {
        'class': 'question',
        'data-target': 'question' + counter,
    });
    var questionInput = $("<input>", {
        'type': 'text',
<<<<<<< HEAD
<<<<<<< HEAD
        'name':  'question'+ "[" + counter + "]" + "["+ 'text'+ "]"
    }) 
    var answer = $("<div>", {
        'class': 'answer',
        'data-target': 'answer' + counter,
        'name': 'answer' + counter
    });
    var answerInput = $("<input>", {
        'type': 'text',
        'name':  'question' + "[" + counter + "]" + "["+ 'answer' + "]"
=======
        'name':  'question ' + counter
=======
        'name':  'question'+ "[" + counter + "]" + "["+ 'text'+ "]"
>>>>>>> adds questions to the database, adds survey_questions to the db
    }) 
    var answer = $("<div>", {
        'class': 'answer',
        'data-target': 'answer' + counter,
        'name': 'answer' + counter
    });
    var answerInput = $("<input>", {
        'type': 'text',
<<<<<<< HEAD
        'name':  'answer' + counter
>>>>>>> adds stuff to the database but it needs to be redone with promises
=======
        'name':  'question' + "[" + counter + "]" + "["+ 'answer' + "]"
>>>>>>> adds questions to the database, adds survey_questions to the db
    }) 
    $(p).append(questionText);
    $(p).append(questionInput);
    $(p).append(answerText);
    $(p).append(answerInput);
    $(location).append(p);
    
}
function format(data){
    var dataObject = {};
    var urlPathParts = window.location.pathname.split("/");
    var uniqueID = urlPathParts[urlPathParts.length - 1];
    console.log(uniqueID);
    dataObject['type'] = "submit-survey";
    dataObject['question'] = {}
    var counter = 1;
    dataObject['question'][counter] = {}
    data.serializeArray().forEach(function(key){
        console.log(key)
        // dataObject['question'][counter] = {}
        // dataObject['question'][counter][text]
        // // dataObject[questions][counter]['text'] =  
    })
    return dataObject;
}

$("[data-target='add-question']").on('click', function(event){
    event.preventDefault();
    createTextBox();
})

$("[data-target='submit']").on('click', function(event){
    console.log("hello")
    // event.preventDefault();
    var finishedQuestions = format($("[data-target='form']"))
    console.log(finishedQuestions);
    // sendToWebSocket(finishedQuestions);
})





function sendToWebSocket(message){
    
    socket.send(JSON.stringify(message));
}


// socket.onmessage = (msg) => {
//     var data = JSON.parse(msg.data);
//     console.log(data)
//     $("[data-target = 'temp-display']").html(data.temp + "&deg");
//     $("[data-target = 'humid-display']").html(data.humid + "%")
// };
