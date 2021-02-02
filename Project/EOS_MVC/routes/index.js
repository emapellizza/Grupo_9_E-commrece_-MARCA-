/*var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */

router.get('/', mainController.index);

//router.get('/detalleMenu',indexController.detalle);

//router.get('/detalleMenu:d')

module.exports = router;