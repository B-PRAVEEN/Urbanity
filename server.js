var express = require('express');
var session = require('express-session')
var passport = require('passport');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;

// Connections
var app = express();
app.use(express.static(__dirname + '/public'));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API endpoints
/*
app.get('/api/users', function(req, res) {
  
});

  app.get('/api/users/:name', function(req, res) {
    
  });

  app.get('/api/users/:gender', function(req, res) {
    
  });

  app.get('/api/users/:date_of_birth', function(req, res) {
  
  });

  app.get('/api/users/:age', function(req, res) {
    
  });

  app.get('/api/users/:address', function(req, res) {
    
  });

  app.get('/api/users/:nationality', function(req, res) {
    
  });

  app.get('/api/users/:languages', function(req, res) {
  
  });

  app.get('/api/users/:interests', function(req, res) {
  
  });

  app.get('/api/users/:special_needs', function(req, res) {
  
  });

  app.get('/api/users/:email', function(req, res) {
  
  });

  app.get('/api/users/:username', function(req, res) {
  
  });

  app.get('/api/users/:password', function(req, res) {
  
  });

app.post('/api/users', function(req, res) {
  
});

  app.post('/api/users/:name', function(req, res) {
    
  });

  app.post('/api/users/:gender', function(req, res) {
    
  });

  app.post('/api/users/:date_of_birth', function(req, res) {
  
  });

  app.post('/api/users/:age', function(req, res) {
    
  });

  app.post('/api/users/:address', function(req, res) {
    
  });

  app.post('/api/users/:nationality', function(req, res) {
    
  });

  app.post('/api/users/:languages', function(req, res) {
  
  });

  app.post('/api/users/:interests', function(req, res) {
  
  });

  app.post('/api/users/:special_needs', function(req, res) {
  
  });

  app.post('/api/users/:email', function(req, res) {
  
  });

  app.post('/api/users/:username', function(req, res) {
  
  });

  app.post('/api/users/:password', function(req, res) {
  
  });

app.put('/api/users', function(req, res) {
  
  });
    app.put('/api/users/:name', function(req, res) {
    
  });

  app.put('/api/users/:gender', function(req, res) {
    
  });

  app.put('/api/users/:date_of_birth', function(req, res) {
  
  });

  app.put('/api/users/:age', function(req, res) {
    
  });

  app.put('/api/users/:address', function(req, res) {
    
  });

  app.put('/api/users/:nationality', function(req, res) {
    
  });

  app.put('/api/users/:languages', function(req, res) {
  
  });

  app.put('/api/users/:interests', function(req, res) {
  
  });

  app.put('/api/users/:special_needs', function(req, res) {
  
  });

  app.put('/api/users/:email', function(req, res) {
  
  });

  app.put('/api/users/:username', function(req, res) {
  
  });

  app.put('/api/users/:password', function(req, res) {
  
  });

app.delete('/api/users', function(req, res) {
  
  });

  app.delete('/api/users/:name', function(req, res) {
    
  });

  app.delete('/api/users/:gender', function(req, res) {
    
  });

  app.delete('/api/users/:date_of_birth', function(req, res) {
  
  });

  app.delete('/api/users/:age', function(req, res) {
    
  });

  app.delete('/api/users/:address', function(req, res) {
    
  });

  app.delete('/api/users/:nationality', function(req, res) {
    
  });

  app.delete('/api/users/:languages', function(req, res) {
  
  });

  app.delete('/api/users/:interests', function(req, res) {
  
  });

  app.delete('/api/users/:special_needs', function(req, res) {
  
  });

  app.delete('/api/users/:email', function(req, res) {
  
  });

  app.delete('/api/users/:username', function(req, res) {
  
  });

  app.delete('/api/users/:password', function(req, res) {
  
  });

*/

var mongooseUri = 'mongodb://localhost/urbanity';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongoose connected to your soul on:', mongooseUri);
})

app.listen(port, function () {
  console.log('This is port:', port);
})
