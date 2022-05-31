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

router.get("/new", function (req, res, next) {
  res.render("form", { idk: "yo" });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.newText,
    user: req.body.user,
    added: new Date(),
  });
  // console.log('trying ' + messages)
  res.redirect('/');
});

module.exports = router;
// module.exports = messages;
