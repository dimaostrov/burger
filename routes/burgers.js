var express = require('express');
var router = express.Router();


var burgerController = require('../controllers/burgers_controller');

router.get('/allburgers', burgerController.getAllBurgers);

router.post('/allburgers', burgerController.postBurger);

module.exports = router;
