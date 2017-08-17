const db = require('./db');

function addHostToDatabase(uniqueID){
  return db.one(`
    insert 
    into hosts(host_unique_id) 
      values ('${uniqueID}')
      returning host_id;
  `).then((result) =>{
      
      return result.host_id;
  });
}

function addSurveyToDatabase(survey_name){
  return db.one(`
  insert into surveys(survey_name)
    values ('${survey_name}')
    returning survey_id;
  `).then((result) =>{
    return result.survey_id;
  });
}


 
function addQuestionsToDatabase(receivedSurvey){
  var counter = 1;
  var questionsToAdd = [];
  for (submitted in receivedSurvey){
    if(questionEqualsQuestion(receivedSurvey[submitted], receivedSurvey['question ' + counter])){
      questionsToAdd.push(receivedSurvey['question ' + counter]);
      counter++
    }
  }
  addQuestionArrayToDB(questionsToAdd);
}
  
function addAnswersToDatabase(receivedSurvey){
  var counter = 1;
  var answersToAdd = [];
  for(submitted in receivedSurvey){
    if(questionEqualsQuestion(receivedSurvey[submitted], receivedSurvey['answer' + counter])){
      answersToAdd.push(receivedSurvey['answer' + counter]);
      counter++;
    }
  }
  addAnswerstoDB(answersToAdd);
}


function addClientName(clientName){
  return db.one(`
      INSERT INTO clients(client_name) 
      VALUES('${object.client_name}') 
      RETURNING client_id;
  `).catch(console.log)
}

function questionEqualsQuestion(thing1, thing2){
  return thing1 === thing2
}

function addQuestionArrayToDB(array){
  array.forEach((element)=>{
    db.one(`
    insert into questions(question)
      values ('${element}')
      returning question_id
    `)
  });
}
function addAnswerstoDB(array){
  array.forEach((element)=>{
    db.one(`
    insert into answers(answer)
      values ('${element}')
      returning answer_id
    `)
  });
}

function sendSurveyToDB(dataFromForm){
  
}




module.exports = {
    sendSurveyToDB: sendSurveyToDB,
    addHostToDatabase: addHostToDatabase, 
    addClientName: addClientName,
    addSurveyToDatabase: addSurveyToDatabase,
    addQuestionsToDatabase:addQuestionsToDatabase,
    addAnswersToDatabase:addAnswersToDatabase
  };
