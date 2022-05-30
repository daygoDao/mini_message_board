var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amir",
    add: new Date()
  },
  {
    text: "Hello world!",
    user: "karl",
    add: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini message board' });
});

module.exports = router;
