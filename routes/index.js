var express = require('express');
var router = express.Router();
var path = require("path")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // dynamically adding to our index file  
  //res.sendFile(path.join(__dirname, '../views', 'index.html'));
  // res.sendFile('../views/index.html' , { root : __dirname});
});



module.exports = router;
