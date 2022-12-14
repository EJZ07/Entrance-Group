var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.sendFile( __dirname + "/" + "index.html" );
 })

 // http://localhost:3000/auth
 app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       uername:req.query.username,
       pass:req.query.pass
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
 
 // This responds a POST request for the homepage

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost%s", host, port)
})