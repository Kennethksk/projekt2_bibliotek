var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const modelBooks = require('../models/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Library Front Page' });
});

router.get('/viewbooks.pug', async function(req, res, next) {
  let result = await modelBooks.books;
  res.render('viewbooks', { 
    title: 'View books in library',
    books: result 
  });
  const dbname = "books";
  const findDB = `mongodb://localhost:27017/${dbname}`;
  const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
  mongoose.connect(findDB, conparam);
  const db = mongoose.connection;
  db.once("open", function() {
    console.log("Connected to server by mongoose");
    console.log(result);
  });
});

router.get('/addbooks.pug', function(req, res, next) {
  res.render('addbooks', { title: 'Add books to library' });
});
// router.get('/persons.pug', function(req, res, next) {
//   res.render('persons', { title: 'User registration page' });
// });

module.exports = router;
