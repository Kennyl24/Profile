
const mongoose = require('mongoose');
mongoose.connect('process.env.MONGODB_URI');
const db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongoose connection error', err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports.Contact = Contact;
