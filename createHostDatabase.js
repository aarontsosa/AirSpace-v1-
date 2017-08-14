const db = require('./db');

function createHostDatabase(uniqueID){
  return db.one(`
    CREATE TABLE ${uniqueID}(
        client_id serial primary key,
        name varchar(100) not null
        
      );
  `).catch(console.log);    
}


module.exports = {
    createHostDatabase: createHostDatabase   
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