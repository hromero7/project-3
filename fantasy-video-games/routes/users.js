const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.get('/', (req, res) => {
    res.json({works : "good"})
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