var express = require('express');
var router = express.Router();

var bible = require('../services/bible.js');

router.get('/', function(req, res, next) {
    res.redirect('/kr/maintenance');
});
  
router.get('/testimony', function(req, res, next) {
    res.redirect('/kr/maintenance');
});

router.get('/maintenance', function(req, res, next) {
    res.render('index_kr', {
        title: '오늘의 말씀 - 점검중',
        verse: '준비중',
        book: '요한계시록 16:15'
    });
});

router.get('/about', function(req, res, next) {
    res.render('index_kr', {
        title: '오늘의 말씀 - 정보',
        verse: '오늘의 말씀',
        book: '개역한글판 (KRV)'
    });
});

router.get('/quotes/:category', function(req, res, next) {
    if(bible(req.params.category + '_kr') === null) {res.redirect('/kr/maintenance');}
    res.render('index_kr', {
        title: '오늘의 말씀 - ' + req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1),
        verse: bible(req.params.category + '_kr')[0],
        book: bible(req.params.category + '_kr')[1]
    });
});

module.exports = router;