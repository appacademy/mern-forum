const express = require('express');
const usersRouter = express.Router()
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

usersRouter.get('/test', (req, res) => {
    res.send('this is the users route');
})

usersRouter.post('/register', (req, res) => {
   let user = new User({
       email: req.body.email,
       age: req.body.age
   });

   let password = req.body.password;

   bcrypt.genSalt(10, function(err, salt) {
       bcrypt.hash(password, salt, function(err, hash) {
           if (err) throw err;
           user.password_digest = hash;
           user.save()
            .then(user => res.json(user))
            .catch(err => {
                if (err.name === 'MongoError' && err.code === 11000) {
                    res.status(400).json('Email is already taken');
                }
            }) 
       });
   });
})

module.exports = usersRouter;