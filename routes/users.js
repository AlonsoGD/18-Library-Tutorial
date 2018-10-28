var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

<<<<<<< HEAD
router.get('/cool', (req, res, next) => {
  res.send('You\'re so cool');
})

=======
>>>>>>> be312e9... First commit - boilerplate
module.exports = router;
