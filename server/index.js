const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('../database');
const db = require('../database/index.js');
const mongoose = require('mongoose');
const fs = require('fs');
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/Home', express.static(__dirname + '/../client/dist'));
app.use('/About', express.static(__dirname + '/../client/dist'));
app.use('/Projects', express.static(__dirname + '/../client/dist'));
app.use('/Contact', express.static(__dirname + '/../client/dist'));

app.post('/ReachOut', (req, res) => {
  console.log(req.body);
  let contactBody = req.body;
  let currentContact = new db.Contact({
    name: contactBody.name,
    email: contactBody.email,
    phone: contactBody.phone,
    message: contactBody.message,
    date: Date(),
  });
  currentContact.save((err, currentContact) => {
    if (err) {
      console.log('err on saving', err);
    } 
    console.log(currentContact); 
    res.send('contact recieved');
  });
  
});
app.get('/Resume', (request, response) => {
  let tempFile = './files/Resume.pdf';
  fs.readFile(tempFile, function (err, data) {
    response.contentType('application/pdf');
    response.send(data);
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});