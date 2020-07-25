const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const User = require('../models/User');

router.post('/', (req,res) => {
  

    const username = req.body.username
    const password = req.body.password

    console.log("request body is", req.body)

    //validation
    if(!username || !password){
        return res.status(300).json({ msg: 'Please enter all fields (auth).'})
    }

    //check for existing user
    User.findOne({ username : username })
    .then(user => {
        if(!user) return res.status(300).json({ msg: 'User does not exist. (auth)'});

        //validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(300).json({ msg: 'Invalid credentials (auth)' })

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
        
    });
});

//get api/auth/user
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router; 