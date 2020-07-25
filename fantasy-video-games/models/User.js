const mongoose = require("mongoose");
const { Decimal128 } = require("bson");

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
    balance: {
        type: Number,
        default: 100000
    },
    description: {
        type: String,
        default:"Welcome to my profile."
    },
    badges: {
        type: Array,
    },
    emotes: {
        type: Array
    },
    profile_pic : {
        type: String,
        default: "../../client/src/pages/assets/fvg2.png"
    },
    register_date: {
        type: Date,
        default: Date.now()
    }
})


//model
module.exports = User = mongoose.model('user', UserSchema);


