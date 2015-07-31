var express = require('express');
var passport = require('passport');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var env = require('./env.js');

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



passport.use(new GoogleStrategy({
    clientID: (process.env.googleClientId || env.googleClientID),
    clientSecret: (process.env.googleClientSecret || env.googleClientSecret),
    callbackURL: (process.env.googleCallbackURL || env.googleCallbackURL),
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
}));

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
  }));


//Middleware
app.use(bodyParser.json());
app.user(bodyParser.urlencoded());
app.use(cors());

//Session and Passport
app.use(Session({
  secret: process.env.SESSION_SECRET || env.session_secret,
  saveUninitialized: true,
  resave: true
}))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  //TODO serialize user id from database
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  //TODO query database with id
  done(null, obj)
})

//TODO add authentication endpoints




app.use(express.static(__dirname + '/public'));

// Connections
var port = process.env.PORT || env.port;

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
