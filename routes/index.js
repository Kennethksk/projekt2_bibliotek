var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const book = require('../models/books');
const books = require('../models/handleBooks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Library Front Page' });
});

router.get('/viewbooks', async function(req, res, next) {
  let result = await books.getBooks({}, {}); // her læses bøger
  res.render('viewbooks', {
    title: 'View books in library',
    books: result
  });
});

router.get('/addbooks', async function(req, res, next) {
  res.render('addbooks', { 
    title: 'Add books to library',
  });
});

router.post('/addbooks', async function(req, res, next) {
  let result = await books.putBooks(req);
  res.render('addbooks', {
    title: "Add books to library",
    books: result
  });
});

// router.get('/persons', function(req, res, next) {
//   res.render('persons', { title: 'User registration page' });
// });

module.exports = router;
