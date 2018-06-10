var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/allburgers', (req, res) => {
  //make a call to db to get all burgers
  res.json()
})

router.post('/allburgers', (req, res) => {
  //make a call to db to post a burger and respond with all burgers
  res.json()
})

module.exports = router;
