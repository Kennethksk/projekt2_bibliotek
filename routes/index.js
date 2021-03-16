var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const book = require('../models/books');
//const getBooks = require('../models/handleBooks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Library Front Page' });
});

router.get('/viewbooks', async function(req, res, next) {
  const dbname = "library";         // databasen hedder library
  const findDB = `mongodb://localhost:27017/${dbname}`;
  const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
  mongoose.connect(findDB, conparam);
  const db = mongoose.connection;
  db.once("open", function() {
    console.log("Connected to server by mongoose");
  });
  let result = await book.find({}, null, {}); // her læses bøger
  res.render('viewbooks', {
    title: 'View books in library',
    books: result
  });
});

router.get('/addbooks', function(req, res, next) {
  res.render('addbooks', { title: 'Add books to library' });
});
// router.get('/persons', function(req, res, next) {
//   res.render('persons', { title: 'User registration page' });
// });

module.exports = router;
