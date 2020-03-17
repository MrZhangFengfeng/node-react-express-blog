var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/demo', function(req, res, next) {
  res.send({name:'zxf',age: 18});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
