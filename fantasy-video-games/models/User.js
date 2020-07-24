const mongoose = require("mongoose");

//schema
const Schema = mongoose.Schema;
const User = new Schema({
    username: String,
    password: String
})


//model
const Users = mongoose.model("Users", User);

module.exports = Users;


