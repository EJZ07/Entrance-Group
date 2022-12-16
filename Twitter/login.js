const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');

let connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '1234',
	database : 'Twitter'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/views/login.html'));
});

// http://localhost:3000/auth
app.get('/auth', function(request, response) {
	// Capture the input fields
    res = {
        username:request.query.username,
        password:request.query.password
     };
	
    console.log(JSON.stringify(res))
	// Ensure the input fields exists and are not empty
    var username = response["username"];
    var password = response["password"];
	if ( username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end(JSON.stringify(response));
	}
});

// // http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.sendFile(path.join(__dirname + '/views/home.html'));
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Twitter app listening at http://%s:%s", host, port)
 })