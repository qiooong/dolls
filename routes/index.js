var express = require('express');
var router = express.Router();
module.exports = router;

var url = require('url');


// HOME PAGE
// /

router.get('/', function(request, response, toss) {
  
    
    response.locals.layout = 'layout';
    response.locals.sparkles = true;
     response.render('home');

  });
  
  


// upload PAGE

router.get('/upload', function(request, response, toss) {
  
  response.locals.layout = 'layout';
  response.render('upload');
    
  });
  
// Contact PAGE

router.get('/contact', function(request, response, toss) {
  
  response.locals.layout = 'layout2';
  response.locals.sparkles = true;
  response.render('contact');
    
  });



// ABOUT PAGE
// /about

router.get('/about', function(request, response) {

  response.locals.layout = 'layout2';
  response.locals.sparkles = true;
  response.render('about');
  
});


router.get('/download', function(request, response) {
  var urlString = request.substring(8);
  console.log(urlString);
});


// VIDEO response

router.get('/videos/*', function(request, response) {
  var query = request.url;
  //get the url of the video to download
  var urlString = "//cameratag.com/"+String(query).substring(6);
  console.log("got the video and the url is: "+urlString);
  var objToJson = { };
  objToJson.response = urlString;
  response.write(JSON.stringify(objToJson));
});