
//Base Declarations
var express = require('express');
var app = express();


//Server Start
app.listen(8080, function(){
    console.log('Server Started.');
})

//Get Requests

app.get('/', function(req, res){
   
    //Gather Data
    
    var userOS = req.headers['user-agent'];
    var userIP = req.headers['x-forwarded-for'];
    var userLanguage = req.headers['accept-language'];
    
    var reply = {
         ipaddress: userIP,
         language: userLanguage,
         software: userOS
    };
    

    //Send Response
    res.send(reply);
    
    
});