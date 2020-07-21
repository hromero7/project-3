const mongoose = require("mongoose");

//schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now()
    }
})


//model
module.exports = User = mongoose.model('user', UserSchema);


