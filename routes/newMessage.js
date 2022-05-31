var express = require('express');
var router = express.Router();

// get /new route
router.get('/', function(req, res, next) {
  res.render('form', {idk: 'yo'});
});

module.exports = router;
