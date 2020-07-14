const express = require("express");
const mongoose = require("mongoose");

const app = express()
const PORT = process.env.PORT || 3003;

mongoose.connect('mongodb://localhost/fantasyvideogames', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });