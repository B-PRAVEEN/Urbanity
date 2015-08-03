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
app.get('/api/models/user', function(req, res) {
  
});

  app.get('/api/models/user/:name', function(req, res) {
    
  });

  app.get('/api/models/user/:gender', function(req, res) {
    
  });

  app.get('/api/models/user/:date_of_birth', function(req, res) {
  
  });

  app.get('/api/models/user/:age', function(req, res) {
    
  });

  app.get('/api/models/user/:address', function(req, res) {
    
  });

  app.get('/api/models/user/:nationality', function(req, res) {
    
  });

  app.get('/api/models/user/:languages', function(req, res) {
  
  });

  app.get('/api/models/user/:interests', function(req, res) {
  
  });

  app.get('/api/models/user/:special_needs', function(req, res) {
  
  });

  app.get('/api/models/user/:email', function(req, res) {
  
  });

  app.get('/api/models/user/:username', function(req, res) {
  
  });

  app.get('/api/models/user/:password', function(req, res) {
  
  });

app.post('/api/models/user', function(req, res) {
  
});

  app.post('/api/models/user/:name', function(req, res) {
    
  });

  app.post('/api/models/user/:gender', function(req, res) {
    
  });

  app.post('/api/models/user/:date_of_birth', function(req, res) {
  
  });

  app.post('/api/models/user/:age', function(req, res) {
    
  });

  app.post('/api/models/user/:address', function(req, res) {
    
  });

  app.post('/api/models/user/:nationality', function(req, res) {
    
  });

  app.post('/api/models/user/:languages', function(req, res) {
  
  });

  app.post('/api/models/user/:interests', function(req, res) {
  
  });

  app.post('/api/models/user/:special_needs', function(req, res) {
  
  });

  app.post('/api/models/user/:email', function(req, res) {
  
  });

  app.post('/api/models/user/:username', function(req, res) {
  
  });

  app.post('/api/models/user/:password', function(req, res) {
  
  });

app.put('/api/models/user', function(req, res) {
  
  });
    app.put('/api/models/user/:name', function(req, res) {
    
  });

  app.put('/api/models/user/:gender', function(req, res) {
    
  });

  app.put('/api/models/user/:date_of_birth', function(req, res) {
  
  });

  app.put('/api/models/user/:age', function(req, res) {
    
  });

  app.put('/api/models/user/:address', function(req, res) {
    
  });

  app.put('/api/models/user/:nationality', function(req, res) {
    
  });

  app.put('/api/models/user/:languages', function(req, res) {
  
  });

  app.put('/api/models/user/:interests', function(req, res) {
  
  });

  app.put('/api/models/user/:special_needs', function(req, res) {
  
  });

  app.put('/api/models/user/:email', function(req, res) {
  
  });

  app.put('/api/models/user/:username', function(req, res) {
  
  });

  app.put('/api/models/user/:password', function(req, res) {
  
  });

app.delete('/api/models/user', function(req, res) {
  
  });

  app.delete('/api/models/user/:name', function(req, res) {
    
  });

  app.delete('/api/models/user/:gender', function(req, res) {
    
  });

  app.delete('/api/models/user/:date_of_birth', function(req, res) {
  
  });

  app.delete('/api/models/user/:age', function(req, res) {
    
  });

  app.delete('/api/models/user/:address', function(req, res) {
    
  });

  app.delete('/api/models/user/:nationality', function(req, res) {
    
  });

  app.delete('/api/models/user/:languages', function(req, res) {
  
  });

  app.delete('/api/models/user/:interests', function(req, res) {
  
  });

  app.delete('/api/models/user/:special_needs', function(req, res) {
  
  });

  app.delete('/api/models/user/:email', function(req, res) {
  
  });

  app.delete('/api/models/user/:username', function(req, res) {
  
  });

  app.delete('/api/models/user/:password', function(req, res) {
  
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
