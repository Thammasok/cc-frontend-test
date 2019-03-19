var express = require('express');
var router = express.Router();

const HomeController = require('../controller/home');

/* GET home page. */
router.get('/', HomeController.Index);
router.get('/tqm', HomeController.TestTQM)

module.exports = router;
