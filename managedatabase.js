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

function getName(nameID, hostID){
  return db.one(`
  select c.client_name
	from client_host ch
	inner join clients c
	on ch.client_id = c.client_id
	where ch.client_id = ${nameID} and ch.host_id = ${hostID}`)
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
  }).catch(console.log)
  })
}

function getClientResults(host_id, survey_id){
  return db.query(`
  SELECT c.client_name, q.question, r.result
  From clients c 
  inner join results_clients rc
  on c.client_id = rc.client_id
  
  inner join results r
  on rc.result_id = r.result_id
  
  inner join results_questions rq
  on rc.result_id = rq.result_id
  
  inner join survey_questions sq
  on rq.question_id = sq.question_id
  
  inner join questions q
  on sq.question_id = q.question_id
    
    WHERE sq.survey_id = ${survey_id};
  `).catch(console.log)
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
    WHERE hs.host_id = ${host_id} and hs.survey_id = ${survey_id};
  `).catch(console.log)
}

function getQuestions(survey_id, host_id){
  return db.query(`
    SELECT q.question, q.question_id
    FROM host_survey hs
    INNER JOIN survey_questions sq
    ON hs.survey_id = sq.survey_id
    INNER JOIN questions q
    ON sq.question_id = q.question_id
    WHERE hs.survey_id = ${survey_id} and hs.host_id = ${host_id};
  `)
}

function getSurveys(host_id){
  return db.query(`
  select s.survey_id, s.survey_name
	from 
		surveys as s
		inner join host_survey hs
			on s.survey_id = hs.survey_id
  where hs.host_id = ${host_id};
  `).then((result)=>{
    return result;
  })
}

function getAnswers(answer_id){
  return db.one(`
    SELECT answer
    from answers
    where answer_id = ${answer_id}
  `)
}

function addQuestionsAnswersSurveyToDB(data, surveyID){
  // if (Object.keys(data).length < 2){
  //   // console.log(surveyID);
  //   // return surveyID;
  //   return;
  // }
  Object.keys(data.question).forEach((qAndA)=>{
    
    questionID = db.one(`
      insert into questions(question)
        values ('${data.question[qAndA]['text']}')
        returning question_id
      `).then(result =>{
        db.one(`insert into survey_questions(question_id, survey_id)
        values (${result.question_id}, ${surveyID})
        returning question_id
        `)
        .then(result=>{
          var theQuestionId = result.question_id
          db.one(`
            insert into answers(answer)
              values('${data.question[qAndA]['answer']}')
              returning answer_id
          `)
          .then(result=>{
            db.one(`
            insert into questions_answers(question_id, answer_id)
              values(${theQuestionId}, ${result.answer_id})
              returning answer_id
            `).catch(console.log);
          })
        }).catch(console.log)
      }).catch(console.log)
      //console.log(questionID);
      // return surveyID;
  });
}

function addResults(array, name, survey){
  if(typeof(array)==="string"){
   return db.one(`
    INSERT INTO results(result)
    VALUES('${array}')
    RETURNING result_id;
`).then(result_id => {
    return db.query(`
        SELECT sq.question_id
        FROM host_survey hs
        INNER JOIN survey_questions sq
        ON hs.survey_id = sq.survey_id
        WHERE hs.survey_id = ${survey};
      `).then(question_ids => {
        return db.one(`
            INSERT INTO results_questions(result_id, question_id)
            VALUES(${result_id.result_id}, ${question_ids[0].question_id})
            RETURNING question_id;
        `).then(question_id => {
          return db.one(`
                INSERT INTO results_clients(result_id, client_id)
                VALUES(${result_id.result_id}, ${name})
                RETURNING client_id;
          `)
        })
      })
})
  }
  else{
    for(let i=0; i < array.length; i++){
    db.one(`
        INSERT INTO results(result)
        VALUES('${array[i]}')
        RETURNING result_id;
    `).then(result_id => {
        db.query(`
            SELECT sq.question_id
            FROM host_survey hs
            INNER JOIN survey_questions sq
            ON hs.survey_id = sq.survey_id
            WHERE hs.survey_id = ${survey};
          `).then(question_ids => {
            db.one(`
                INSERT INTO results_questions(result_id, question_id)
                VALUES(${result_id.result_id}, ${question_ids[i].question_id})
                RETURNING question_id;
            `).then(question_id => {
              db.one(`
                    INSERT INTO results_clients(result_id, client_id)
                    VALUES(${result_id.result_id}, ${name})
                    RETURNING client_id;
              `)
            })
          })
    })
  }
}
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
    return survey_id = addSurveyToDatabase(dataFromForm['Survey-Name'])
      .then(survey_id =>{addSurveyAndHostToDatabase(survey_id, uniqueid)
        .then(survey_id =>{addQuestionsAnswersSurveyToDB(dataFromForm, survey_id)})
      })
      .catch(console.log);   
}

function formatNamesResults(result){
    result.forEach((object) => {
      duplicate = false
      let Name = {}
      Name.name = object.client_name
      fullfilledResult.forEach((Name) => {
        if(Name.name === object.client_name){
          duplicate = true
        }
      })
      if (duplicate === false){
        fullfilledResult.push(Name)
      }
    })
    return fullfilledResult 
}

function formatQuestionResults(fullfilledResult, result){
  for(i=0;i<fullfilledResult.length;i++){
    counter = 0
    let question = {}
    let Result = {}
    for(x=0;x<result.length;x++) {
      if(fullfilledResult[i].name === result[x].client_name){
        question[counter] = result[x].question
        Result[counter] = result[x].result
        fullfilledResult[i].question = question
        fullfilledResult[i].result = Result
        counter += 1
      }
    }
  }
  return fullfilledResult
}

module.exports = {
    sendFormDataToDB: sendFormDataToDB,
    addHostToDatabase: addHostToDatabase, 
    addClientName: addClientName,
    addSurveyToDatabase: addSurveyToDatabase,
    getQuestionAnswer: getQuestionAnswer,
    getQuestions: getQuestions,
    getAnswers: getAnswers,
    getSurveys: getSurveys,
    addResults: addResults,
    getClientResults: getClientResults,
    formatNamesResults: formatNamesResults,
    formatQuestionResults: formatQuestionResults,
    getName: getName
  };

