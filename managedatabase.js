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

module.exports = {
    addHostToDatabase: addHostToDatabase, 
    addClientName: addClientName,
    addSurveyToDatabase: addSurveyToDatabase,
    getQuestionAnswer: getQuestionAnswer,
    getQuestions: getQuestions,
    getAnswers: getAnswers
  };
