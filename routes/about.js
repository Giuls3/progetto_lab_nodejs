var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about.hbs', { title: 'Abous Us - Domus Mirabilia Blog' });
});

module.exports = router;
