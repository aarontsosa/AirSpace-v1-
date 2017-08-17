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
 

function addClientName(clientName){
  return db.one(`
      INSERT INTO clients(client_name) 
      VALUES('${object.client_name}') 
      RETURNING client_id;
  `).catch(console.log)
}

module.exports = {
    addHostToDatabase: addHostToDatabase, 
    addClientName: addClientName,
    addSurveyToDatabase: addSurveyToDatabase
  };
