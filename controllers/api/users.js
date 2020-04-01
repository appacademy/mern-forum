const express = require('express');
const usersRouter = express.Router()

usersRouter.get('/test', (req, res) => {
    debugger
    res.send('this is the users route');
})

usersRouter.post('/register', (req, res) => {
    debugger;
})

module.exports = usersRouter;