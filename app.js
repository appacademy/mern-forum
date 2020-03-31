const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
const mongoURI = require('./config/keys.js').mongoURI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.log(error));

app.get("/", (req, res) => {
    res.json('HOME');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
