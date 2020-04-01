const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const mongoURI = require('./config/keys.js').mongoURI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.log(error));

// models
const User = require('./models/User.js');

// controllers
const usersRouter = require('./controllers/api/users.js');

// middleware for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json('HOME');
});

app.get('/test', (req, res) => {
    let user = new User({
        email: 'test@email.com',
        password_digest: '123456',
        age: 28
    });
    user.save((err) => {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.json('Email is already taken');
        } else {
            res.json(user);
        }
    });
});

app.use('/api/users', usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
