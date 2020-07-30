const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require('config');
const jwt = require('jsonwebtoken');
let path = require('path')

const User = require('../models/User');

router.get('/', (req, res) => {
    res.json({works : "good"})
})

router.get("/user/:id", (req, res) => {
    console.log("id is", req.params.id)
    User.findOne( {email : req.params.id}, (user, err) => {
        if(err){
            res.status(300).json(err)
        } else {
            res.json(user)
        }
    })
})

router.get('/user/pic/:id', (req, res) => {
    let p = path.resolve(__dirname + '/../client/src/pages/assets/' + req.params.id + ".jpg")
    console.log("the path is", p)
    res.sendFile( p)
})

router.post('/', (req,res) => {

    //return res.json({ hello : "world"})

    const { first, last, username, email, password } = req.body;

    //validation
    if(!first || !last || !username || !email || !password){
        return res.status(300).json({ error: true,  error_msg: 'Please enter all fields.'})
    }

    //check for existing user
    User.findOne({ email })
    .then(user => {
        if(user) return res.status(300).json({error: true, error_msg: 'User already exists.'});

        const newUser = new User({
            first,
            last,
            username,
            email,
            password
        });

        //create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user => {
                    console.log("user is", user)

                    jwt.sign(
                        { id:user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    username: user.username,
                                    email: user.email
                                }
                            });
                        }
                    )

                    
                })
            })
        })
    });
});

module.exports = router;