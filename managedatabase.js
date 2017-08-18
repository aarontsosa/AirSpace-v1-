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

function getQuestionAnswer(survey_id, host_id){
  console.log(survey_id)
  console.log(host_id)
  return db.query(`
    SELECT qa.question_id, qa.answer_id
    FROM host_survey hs
    INNER JOIN survey_questions sq
    ON hs.survey_id = sq.survey_id
    INNER JOIN questions_answers qa
    ON sq.question_id = qa.question_id
    WHERE hs.host_unique_id like '%${host_id}%' and hs.survey_id like '%${survey_id}%';
  `)
}

function getQuestions(question_id){
  return db.one(`
    SELECT question
    FROM questions
    WHERE question_id = ${question_id}
  `)
}

function getAnswers(answer_id){
  return db.one(`
    SELECT answer
    from answers
    where answer_id = ${answer_id}
  `)
}

function addQuestionsAnswersSurveyToDB(data, surveyID){
  if (Object.keys(data).length < 2){
    return;
  }
  Object.keys(data.question).forEach((qAndA)=>{
    
    questionID = db.one(`
      insert into questions(question)
        values ('${data.question[qAndA]['text']}')
        returning question_id
      `).then(result =>{
        db.one(`insert into survey_questions(question_id, survey_id)
        values (${result.question_id}, ${surveyID})
        returning question_id
        `).then(result=>{
          var theQuestionId = result.question_id
          db.one(`
            insert into answers(answer)
              values('${data.question[qAndA]['answer']}')
              returning answer_id
          `).then(result=>{
            db.one(`
            insert into questions_answers(question_id, answer_id)
              values(${theQuestionId}, ${result.answer_id})
              returning answer_id
            `).catch(console.log);
          })
        }).catch(console.log)
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
    getQuestionAnswer: getQuestionAnswer,
    getQuestions: getQuestions,
    getAnswers: getAnswers
  };

