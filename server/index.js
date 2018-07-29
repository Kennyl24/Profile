const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('../database');
const db = require('../database/index.js');
const mongoose = require('mongoose');
const fs = require('fs');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/Home', express.static(__dirname + '/../client/dist'));
app.use('/About', express.static(__dirname + '/../client/dist'));
app.use('/Projects', express.static(__dirname + '/../client/dist'));
app.use('/Contact', express.static(__dirname + '/../client/dist'));
app.use('/ReachOut', express.static(__dirname + '/../client/dist'));
app.use('/Email', express.static(__dirname + '/../client/dist'));

app.post('/Email', (req, res) => {
  const mailOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: 'kenny.laprelle@gmail.com',
    subject: 'Contact from Portfolio',
    text: '' + 'Name:' + req.body.name + ' ' + 'Email:' + req.body.email + ' ' + 'Message:' + req.body.message + ' ' + 'Phone:' + req.body.phone + ' '
    + 'Date:' + Date() + '',
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenny.laprelle@gmail.com',
      pass: 'jlq0292424'
    }
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});


app.post('/ReachOut', (req, res) => {
  console.log('hi', req.body);
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
    console.log('hey', currentContact); 
    res.sendStatus(200);
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