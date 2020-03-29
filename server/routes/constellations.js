var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/get', function(req, res, next) {
  var data = JSON.parse(fs.readFileSync('constData.json'),'utf8');
  res.setHeader('Content-Type', 'application/json');	
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.jsonp(data);
});
module.exports = router;
