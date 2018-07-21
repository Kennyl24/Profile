const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('../database');
const db = require('../database/index.js');
const mongoose = require('mongoose');
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/About', express.static(__dirname + '/../client/dist'));
app.use('/Projects', express.static(__dirname + '/../client/dist'));
app.use('/Contact', express.static(__dirname + '/../client/dist'));

app.post('/Contact', (req, res) => {
  console.log(req.body);
  let contactBody = req.body;
  let currentContact = new db.Contact({
    name: contactBody.name,
    email: contactBody.email,
    phone: contactBody.phone,
    message: contactBody.message,
    date: Date(),
  });
  currentContact.save(function(err, currentContact) {
    if (err) {
      console.log('err on saving', err);
    } console.log(currentContact);
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});