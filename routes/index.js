var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/books.pug', function(req, res, next) {
  res.render('books', { title: 'Books page' });
});
router.get('/persons.pug', function(req, res, next) {
  res.render('persons', { title: 'User registration page' });
});

module.exports = router;
