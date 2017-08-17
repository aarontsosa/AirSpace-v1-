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

module.exports = {
    addHostToDatabase: addHostToDatabase, 
    addSurveyToDatabase: addSurveyToDatabase
  };


  // create table ${uniqueID}(
  //   client_id serial primary key



  // CREATE TABLE host1(
  //   client_id integer primary key,
  //   name varchar(100) not null
  // );
  

  // .then((results)=>{
  //   // console.log(results)
  // })