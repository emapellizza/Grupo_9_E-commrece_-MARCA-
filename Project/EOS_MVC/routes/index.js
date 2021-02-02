/*var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */

router.get('/', indexController.index);

router.get('/detalleMenu',indexController.detalle);

router.get('/detalleMenu:d')

module.exports = router;