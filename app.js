const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
const mongoURI = require('./config/keys.js').mongoURI
console.log('STARTING SERVER');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.log(error));

app.get('/test', (req, res) => {
    console.log('tester');
    res.json('what is happening');
});

app.get("/", (req, res) => {
    console.log('banana');
    res.json('HOME');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));