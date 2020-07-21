const express = require("express");
const mongoose = require("mongoose");
const socketio = require('socket.io');
const http = require('http');
const { addUser, removeUser, getUser, getUsersInRoom } = require("./socket/users");

const PORT = process.env.PORT || 3003;

const router = require("./routes/index")

const app = express()
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log("we have a new connection!!")

  socket.on('join', ({ name, room }, callback)=> {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);
    
    socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to ${user.room} ` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});
    socket.join(user.room);


    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
    callback();
  });

  socket.on('sendMessage', (message, callback)=> {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('disconnect', ()=> {
    const user = removeUser(socket.id);
    
    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` })
    }
  })
})

app.use(router);


mongoose.connect('mongodb://localhost/fantasyvideogames', {
  useNewUrlParser: true,
  useUnifiedTopology: true

  
});

mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`))

// app.listen(PORT, () => {
//     console.log(`🌎 ==> API server now on port ${PORT}!`);
//   });