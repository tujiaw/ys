var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', active: '/' });
});

router.get('/aboutUs', function(req, res, next) {
  res.render('info', {
    active: 'aboutUs',
    infoNav: ['1111', '2222', '33333']
  });
});

module.exports = router;
