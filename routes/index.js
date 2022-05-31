var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amir",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "karl",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini message board' , messages: messages});
});

module.exports = router;
