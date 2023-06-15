const uuidv4 = require("uuid")

const getID=  ()=>{
    return uuidv4.v4();
}

const defaultUsers=[
  {id:getID(),name:"Ali", password:"1234"},
  {id:getID(),name:"Veli", password:"12345"},
]

const allUsers =defaultUsers;


// Hocanin yaptigi yontem
// const allUsers = [];

// const defaultUsers = [
//     {user_id:generateId(),username:"user1",password:"1234"},
//     {user_id:generateId(),username:"user2",password:"1234"},
// ]
// defaultUsers.forEach(x=>{allUsers.push(x)});

function getUsers(){
  return allUsers;
}

function insertUser(user){
  user.id = getID()
  allUsers.push(user)
}

function findUser (name,password){
  const existingUser = allUsers.find((item) => item.name == name && item.password==password);
  return existingUser;
}

module.exports = {
  getUsers,
  insertUser,
  findUser
};