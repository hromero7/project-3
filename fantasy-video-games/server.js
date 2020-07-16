const express = require("express");
const mongoose = require("mongoose");
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3003;

const router = require("./routes/index")

const app = express()
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log("we have a new connection!!")

  socket.on('disconnect', ()=> {
    console.log("user has left")
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