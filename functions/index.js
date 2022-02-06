const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/timestamp', (req, res) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  res.send('Hello from Firebase!');
});

exports.app = functions.https.onRequest(app);

