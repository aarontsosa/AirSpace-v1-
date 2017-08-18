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
  return survey_id = db.one(`
  insert into surveys(survey_name)
    values ('${survey_name}')
    returning survey_id;
  `).then((result) =>{
      return result.survey_id;
  });
}

function addSurveyAndHostToDatabase(surveyID, hostID){
  return derp = db.one(`
    insert into host_survey(host_id, survey_id)
      values (${hostID}, ${surveyID})
      returning survey_id
  `).then(result=>{return result.survey_id}).catch(console.log);
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


function addQuestionsAnswersSurveyToDB(data, surveyID){
  // console.log(Object.values(surveyID) + 'values');
  // console.log(Object.keys(surveyID) + 'keys');
  Object.keys(data.question).forEach((qAndA)=>{
    // console.log(data.question[qAndA]['text'] + "HERE");
    questionID = db.one(`
      insert into questions(question)
        values ('${data.question[qAndA]['text']}')
        returning question_id
      `).then(result =>{
        db.one(`insert into survey_questions(question_id, survey_id)
        values (${result.question_id}, ${surveyID})
        returning survey_id
        `)
      }).catch(console.log)
      //console.log(questionID);
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

function sendFormDataToDB(dataFromForm, uniqueid){
    var survey_id;
    // console.log(Object.keys(dataFromForm) + 'here is all the data');
    // console.log(dataFromForm.question.['1']  + 'this is the data');
    return survey_id = addSurveyToDatabase(dataFromForm['Survey-Name'])
      .then(survey_id =>{addSurveyAndHostToDatabase(survey_id, uniqueid)
        .then(survey_id =>{addQuestionsAnswersSurveyToDB(dataFromForm, survey_id)})
      })
      
      .catch(console.log);   
}


module.exports = {
    sendFormDataToDB: sendFormDataToDB,
    addHostToDatabase: addHostToDatabase, 
    addClientName: addClientName,
    addSurveyToDatabase: addSurveyToDatabase,
    addQuestionsToDatabase:addQuestionsToDatabase,
    addAnswersToDatabase:addAnswersToDatabase
  };


  function addClientName(object){
    return client_id = db.one(`
        INSERT INTO clients(client_name) 
        VALUES('${object.client_name}') 
        RETURNING client_id;
    `).then(client_id => {
      console.log([client_id][0].client_id)
      console.log(object)
      return host_id = db.query(`
          SELECT host_id 
          FROM hosts 
          WHERE host_unique_id = '${object.host_id}';
  `).then(host_id => {
        console.log(host_id[0].host_id)     
        console.log([client_id][0].client_id)
        return db.one(`
            INSERT INTO client_host(client_id, host_id) 
            VALUES(${[client_id][0].client_id}, ${host_id[0].host_id}) 
            RETURNING client_id, host_id
    `)
    })
    })
  }