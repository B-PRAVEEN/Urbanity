var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
passport = require('passport'),
flash = require('connect-flash'),
morgan = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
session = require('express-session'),
configDB = require('./app/config/database.js');


// point our server to our front-end's home directory
app.use(express.static(__dirname + '/public'));

var app2 = express().createServer;
var io = require('socket.io').listen(app2);

var env = require('./app/config/env.js'); //pull in our environment settings and passport keys
mongoose.connect(configDB.url); // connect to our database

require('./app/config/passport')(passport); // pass in passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from HTML forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// required for passport
app.use(session({ secret: 'comeCheckOutUrbanityItWillBeTheMostAwesome' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


app.listen(port);
console.log('Welcome to the future. You are visiting... Year:' + port);

