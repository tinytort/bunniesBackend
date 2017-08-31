const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');

app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(express.static('./public'));

const bunnies = require('./routes/bunnies');

app.use('/api/bunnies', bunnies);

app.use((req, res) => {
    res.sendFile('index.html', {
        root:'./public/',
    });
});

app.use(errorHandler());

module.exports = app;