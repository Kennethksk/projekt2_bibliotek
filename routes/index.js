var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const book = require('../models/books');
const books = require('../models/handleBooks');
const person = require('../models/persons');
const persons = require('../models/handlePersons');

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

router.get('/persons', async function(req, res, next) {
  let result = await persons.getPersons({}, {}); // her personer
  res.render('persons', { 
    title: 'User database page',
    persons: result
   });
});

router.get('/addpersons', async function(req, res, next) {
  res.render('addpersons', { 
    title: 'Register loaners to databse',
  });
});

router.post('/addpersons', async function(req, res, next) {
  let result = await persons.putPersons(req);
  res.render('index', { 
    title: 'User database page',
  });
});

module.exports = router;
