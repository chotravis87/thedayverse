var express = require('express');
var router = express.Router();

var bible = require('../services/bible.js')

router.get('/', function(req, res, next) {
  res.redirect('/quotes/covid19');
});

router.get('/testimony', function(req, res, next) {
  res.redirect('/maintenance');
});

router.get('/maintenance', function(req, res, next) {
  res.render('index', {
    title: 'Bible - Maintenance',
    verse: 'Coming Soon',
    book: 'Revelation 16:15'
  });
});

router.get('/quotes/:category', function(req, res, next) {
  if(bible(req.params.category) === null) {res.redirect('/maintenance');}
  res.render('index', {
    title: 'The Daily Verse - ' + req.params.category,
    verse: bible(req.params.category)[0],
    book: bible(req.params.category)[1]
  });
});

module.exports = router;
