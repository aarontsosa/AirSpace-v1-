let socket = new WebSocket('ws://localhost:3002');

var counter = 1
function createTextBox(){
    var location = $("[data-target='question-list']")
    counter ++;
    var text = $("<p>" + "Question " + (counter)+ ": </p>");
    var question = $("<div>", {
        'class': 'question',
        'data-target': 'question' + counter,
    });
    var input = $("<input>", {
        'type': 'text',
        'name': 'question' + counter
    }) 
    $(text).append(input);
    $(question).append(text)
    $(location).append(question);
    
}
function format(data){
    var dataObject = {};
    data.serializeArray().forEach(function(key){
        console.log(key)
        dataObject[key.name] = key.value;
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
    sendIt();
})


function test(){
    db.query(`
    select * from jz6d;
    `).then(console.log)
}
// function submitQuestions(finishedQuestions){
//     db.query(`
        
//     `)
// }

// var msg = {
//     type: "message",
//     text: "hey guys",
//   };

function sendIt(){
    
    socket.send('hey guys');
}


// socket.onmessage = (msg) => {
//     var data = JSON.parse(msg.data);
//     console.log(data)
//     $("[data-target = 'temp-display']").html(data.temp + "&deg");
//     $("[data-target = 'humid-display']").html(data.humid + "%")
// };
