const express = require('express');
const usersRouter = express.Router()

usersRouter.get('/test', (req, res) => {
    res.send('this is the users route');
})

module.exports = usersRouter;