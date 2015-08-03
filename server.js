var express = require('express');
var session = require('express-session')
var passport = require('passport');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var env = require('./env.js');
var port = process.env.PORT || env.port;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

// used for endpoint security, checks for valid passport authenticated user
// example:
// app.get('/api/userProfile', isAuthed, function(){ ...(this will not fire if isAuthed fails) })
var currentUser = {};

var isAuthed = function (req, res, next) {
  if (req.isAuthenticated()) {
    //console.log(req);
    currentUser = req.user;
  /*  console.log('authenticated:')
    console.log(currentUser.name)*/
    return next();
  }
  console.log('Not authenticated');
  res.status(401).end();
}






passport.serializeUser(function(user, done) {
  //TODO serialize user id from database
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  //TODO query database with id
  done(null, obj)
})

passport.use(new GoogleStrategy({
      clientID: env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.googleClientSecret || env.googleClientSecret,
      callbackURL: process.env.googleCallbackURL || env.googleCallbackURL,
      passReqToCallback: true
  },
  function(req, token, tokenSecret, profile, done){
    // Successful authentication, create or update user.
    console.log('authenticated with google');
    console.log(profile);
    /*User.updateOrCreate(profile).then(function(results){
      //console.log(req.session);
      done(null, profile);
  }, function(err){
      done(err, profile);*/
      done(null, profile);
  })
);

passport.use(new TwitterStrategy({
    consumerKey: process.env.CONSUMER_KEY || env.twitterConsumerKey,
    consumerSecret: process.env.CONSUMER_SECRET || env.twitterConsumerSecret,
    callbackURL: process.env.twitterCallbackURL || env.twitterCallbackURL
  },
  function(token, tokenSecret, profile, cb) {
    console.log('auth with twitter');
    console.log('profile');
    // In this example, the user's Twitter profile is supplied as the user
    // record.  In a production-quality application, the Twitter profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));

passport.use(new FacebookStrategy({
  clientID: env.FACEBOOK_APP_ID,
    clientSecret: env.FACEBOOK_APP_SECRET,
    callbackURL: env.facebookCallbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    // Successful authentication, create or update user.
      //console.log(profile);
      console.log('auth with facebook');
      console.log(profile);
/*    User.updateOrCreate(profile).then(function(results){

        req.login(profile, function(err) {
        if (err) {
          return done(err, profile);
        }
        console.log('Should be logged in');
      });*/
      //console.log(req.session.passport.user);
      done(null, profile);
  }, function(err){
      done(err, profile);
  })
  );


// Connections
var app = express();
app.use(express.static(__dirname + '/public'));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Session and Passport
app.use(session({
  secret: process.env.SESSION_SECRET || env.session_secret,
  saveUninitialized: true,
  resave: true
}))
app.use(passport.initialize());
app.use(passport.session());


//TODO add authentication endpoints

app.get('/auth/google', passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {

    //successful authentication redirect, redirect user to welcome screen.
    // User.getUser(req.user.id).then(function(userProfile) {
    // currentUser = userProfile;
    // })
    // //console.log(currentUser);
    // return res.redirect('/#/welcome');
    // //res.status(200).json(req.user);
    console.log('logged in with google')
  });

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // //console.log(req.session);
    // //console.log(req.isAuthenticated());
    // //successful authentication redirect, redirect user to welcome screen.
    // console.log('req.user: ');
    // console.log(req.user);
    // User.getUser(req.user.id).then(function(userProfile) {
    // currentUser = userProfile;
    // })
    // //console.log(currentUser);
    // return res.redirect('/#/welcome');
    // //res.status(200).json(req.user);
    console.log('logged in with facebook')
  });

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('logged in with twitter')
    // res.redirect('/');
  });


// API endpoints
// here
//
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
