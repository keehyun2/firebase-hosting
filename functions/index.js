const functions = require('firebase-functions');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configure api router
app.use('/api', require('./api'));

exports.app = functions.https.onRequest(app);
