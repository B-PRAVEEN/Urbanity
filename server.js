var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoStore = require('connect-mongo')({
        session: session
    }),
    mongoose = require('mongoose'),
    port = 3000;

// Connections

var app = express();
app.use(express.static(__dirname + '/public'));

var app2 = express().createServer;
var io = require('socket.io').listen(app2);

var env = require('./app/config/env.js');
var port = process.env.PORT || env.port;
var bcrypt = require('bcrypt');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var LocalStrategy = require('passport-local');


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
};


passport.serializeUser(function (user, done) {
    //TODO serialize user id from database
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    //TODO query database with id
    done(null, obj)
});

//passport.use(new LocalStrategy({
//
//}));

passport.use(new GoogleStrategy({
            clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.googleClientSecret || env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.googleCallbackURL || env.googleCallbackURL,
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {
            // Successful authentication, create or update user.
            console.log('authenticated with google');
            console.log(req.user);
            /*User.updateOrCreate(profile).then(function(results){
             //console.log(req.session);
             done(null, profile);
             }, function(err){
             done(err, profile);*/
            return done(null, profile);
        })
);

passport.use(new TwitterStrategy({
        consumerKey: process.env.CONSUMER_KEY || env.twitterConsumerKey,
        consumerSecret: process.env.CONSUMER_SECRET || env.twitterConsumerSecret,
        callbackURL: process.env.twitterCallbackURL || env.twitterCallbackURL
    },
    function (token, tokenSecret, profile, cb) {
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
        function (req, accessToken, refreshToken, profile, done) {
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
        })
);



//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// API endpoints

app.get('/api/models/user', function (req, res) {

});

app.get('/api/models/user/:name', function (req, res) {

});

app.get('/api/models/user/:gender', function (req, res) {

});

app.get('/api/models/user/:date_of_birth', function (req, res) {

});

app.get('/api/models/user/:age', function (req, res) {

});

app.get('/api/models/user/:address', function (req, res) {

});

app.get('/api/models/user/:nationality', function (req, res) {

});

app.get('/api/models/user/:languages', function (req, res) {

});

app.get('/api/models/user/:interests', function (req, res) {

});

app.get('/api/models/user/:special_needs', function (req, res) {

});

app.get('/api/models/user/:email', function (req, res) {

});

app.get('/api/models/user/:username', function (req, res) {

});

app.get('/api/models/user/:password', function (req, res) {

});

app.post('/api/models/user', function (req, res) {

});

app.post('/api/models/user/:name', function (req, res) {

});

app.post('/api/models/user/:gender', function (req, res) {

});

app.post('/api/models/user/:date_of_birth', function (req, res) {

});

app.post('/api/models/user/:age', function (req, res) {

});

app.post('/api/models/user/:address', function (req, res) {

});

app.post('/api/models/user/:nationality', function (req, res) {

});

app.post('/api/models/user/:languages', function (req, res) {

});

app.post('/api/models/user/:interests', function (req, res) {

});

app.post('/api/models/user/:special_needs', function (req, res) {

});

app.post('/api/models/user/:email', function (req, res) {

});

app.post('/api/models/user/:username', function (req, res) {


});

app.post('/api/models/user/:password', function (req, res) {

});

app.put('/api/models/user', function (req, res) {

});
app.put('/api/models/user/:name', function (req, res) {

});

app.put('/api/models/user/:gender', function (req, res) {

});

app.put('/api/models/user/:date_of_birth', function (req, res) {

});

app.put('/api/models/user/:age', function (req, res) {

});

app.put('/api/models/user/:address', function (req, res) {

});

app.put('/api/models/user/:nationality', function (req, res) {

});

app.put('/api/models/user/:languages', function (req, res) {

});

app.put('/api/models/user/:interests', function (req, res) {

});

app.put('/api/models/user/:special_needs', function (req, res) {

});

app.put('/api/models/user/:email', function (req, res) {

});

app.put('/api/models/user/:username', function (req, res) {

});

app.put('/api/models/user/:password', function (req, res) {

});

app.delete('/api/models/user', function (req, res) {

});

app.delete('/api/models/user/:name', function (req, res) {

});

app.delete('/api/models/user/:gender', function (req, res) {

});

app.delete('/api/models/user/:date_of_birth', function (req, res) {

});

app.delete('/api/models/user/:age', function (req, res) {

});

app.delete('/api/models/user/:address', function (req, res) {

});

app.delete('/api/models/user/:nationality', function (req, res) {

});

app.delete('/api/models/user/:languages', function (req, res) {

});

app.delete('/api/models/user/:interests', function (req, res) {

});

app.delete('/api/models/user/:special_needs', function (req, res) {

});

app.delete('/api/models/user/:email', function (req, res) {

});

app.delete('/api/models/user/:username', function (req, res) {

});

app.delete('/api/models/user/:password', function (req, res) {

});

//Session and Passport
app.use(session({
    secret: process.env.SESSION_SECRET || env.session_secret,
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

//TODO add authentication endpoints

app.get('/auth/google', passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.profile'}));
app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/'}),
    function (req, res) {

        //successful authentication redirect, redirect user to welcome screen.
        // User.getUser(req.user.id).then(function(userProfile) {
        // currentUser = userProfile;
        // })
        // //console.log(currentUser);
        // return res.redirect('/#/welcome');
        // //res.status(200).json(req.user);
        console.log('logged in with google');
        res.status(200).json(req.user);
    });

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/'}),
    function (req, res) {
        //console.log(req.session);
        //console.log(req.isAuthenticated());
        //successful authentication redirect, redirect user to welcome screen.
        console.log('req.user: ');
        console.log(req.user);
        User.getUser(req.user.id).then(function (userProfile) {
            currentUser = userProfile;
        });
        //console.log(currentUser);
        return res.redirect('/#/welcome');
        //res.status(200).json(req.user);
        console.log('logged in with facebook');
        res.status(200).json(req.user);
    });

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log('logged in with twitter');
        res.status(200).json(req.user);
        // res.redirect('/');
    });
var mongooseUri = 'mongodb://localhost/urbanity';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongoose connected to your soul on:', mongooseUri);
});

io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

app.listen(port, function () {
    console.log('This is port:', port);
});