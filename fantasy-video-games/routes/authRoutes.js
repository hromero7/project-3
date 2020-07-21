const router = require("express").Router();
const {User} = require('../models');
const twitchApi = require("../twitchAPI/twitch");

router.get("/user", (req,res)=> res.json("Hello Myles!"));
router.post("/login", (req,res)=> {
    if(req.body.username === "Myles" && req.body.password === "Magee"){
        res.json("Welcome Myles!!")
    }
});
router.post("/signup", (req,res)=>{
    User.create({
        username:"myles",
        password: "123"
    }).then(dbUser=> console.log(dbUser))
});

router.get("/twitch", (req,res) =>{
    console.log(twitchApi)
});


module.exports = router;