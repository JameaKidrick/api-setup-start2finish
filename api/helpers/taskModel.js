const db = require('../../data/dbConfig')

module.exports ={
  find
}

function find(id){
  if(id){
    return db('tasks')
    .where({ 'tasks.id':id })
    .first()
  }else{
    return db('tasks')
  }
}