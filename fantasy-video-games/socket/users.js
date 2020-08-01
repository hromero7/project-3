const users = [];

const addUser = (args) => {

    console.log("args", args)
  
    name = args.name.trim().toLowerCase();
    room = args.room.trim().toLowerCase();
    balance = 100000;


    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error:  null, user : existingUser}
        return { error: 'Username is taken', user : null };
    }

    const user = { id : args.id, name : args.name, room : args.room, balance: args.balance };

    users.push(user);

    return {erro : null, user :  user };
}

const removeUser = (id) => {
 const index = users.findIndex((user) => user.id === id);

 if(index !== -1) {
     return users.splice(index, 1)[0];
 }
}

const getUser = (id)=> users.find((user) => user.id ===id);

const getUsersInRoom =(room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom }