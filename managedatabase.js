const db = require('./db');

function addHostToDatabase(uniqueID){
  return db.one(`
    insert 
    into hosts(host_unique_id) 
      values ('${uniqueID}')
      returning host_id;
  `).then((result) =>{
    console.log("look a result! " + result.host_id);
  });
}

function grabHostID(uniqueID){
  return db.query(`
    select host_id from hosts where host_unique_id = '${uniqueID}'
  `).then(console.log)
}

function createTable(uniqueID){
  return db.one(`
    CREATE TABLE ${uniqueID}1(
        questionID serial primary key,
        question varchar(100) not null
      );
  `).catch(console.log); 
}   

function addClientName(clientName){
  return db.one(`
      INSERT INTO clients(client_name) 
      VALUES('${object.client_name}') 
      RETURNING client_id;
  `).catch(console.log)
}
// function addElements(obj){
//   for k in Object.keys(obj){
//     console.log(k)
//   }
// }

module.exports = {
    addHostToDatabase: addHostToDatabase, 
    createTable: createTable,
    grabHostID: grabHostID,
    addClientName: addClientName
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