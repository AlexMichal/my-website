var express = require('express');
var router = express.Router();
var path = require("path")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Al',
    profile_pic: '/images/content/profile.jpg'
  }); // dynamically adding content to our index file  
});

module.exports = router;