const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://Luizgustavo358:3649aqwh@cluster0.cuyt1.mongodb.net/smartfridge?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);