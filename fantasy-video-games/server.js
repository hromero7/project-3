const express = require("express");
const mongoose = require("mongoose");
const socketio = require('socket.io');
const http = require('http');
const config = require('config');
const { addUser, removeUser, getUser, getUsersInRoom } = require("./socket/users");

const users = require("./routes/users");
const auth = require("./routes/auth");
const twitch = require('./routes/twitch')


const db = config.get('MONGO_URI');


const PORT = process.env.PORT || 3003;

const router = require("./routes/index")

const app = express()
const server = http.createServer(app);
const io = socketio(server);
const cors = require('cors')

app.use(cors())
app.use(express.json());

//SOCKET.io
io.on('connection', (socket) => {
  console.log("we have a new connection!!")

  socket.on('join', ({ name, room })=> {
    console.log("new user joined!")
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error){
      socket.emit("error", error)
    }
    
    // socket.emit('message', { user: 'admin', text: `Welcome!` });
    // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});
    socket.join(user.room);


    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
 
  });

  socket.on('sendMessage', (message)=> {
    console.log("message recieved")
    const user = getUser(socket.id)
    console.log("user retrieved is", user)

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    //callback();
  });

  socket.on('disconnect', ()=> {
    const user = removeUser(socket.id);
    
    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` })
    }
  })
})

app.use(router);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/twitch', twitch)

mongoose.connect(db , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true

  
});

mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`))

// app.listen(PORT, () => {
//     console.log(`🌎 ==> API server now on port ${PORT}!`);
//   });