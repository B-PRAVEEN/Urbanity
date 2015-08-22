

// API endpoints


module.exports = function(app, passport) {

    app.get('/welcome', function(req, res) {
        res.render('Landing/landingView.html'); // loads our master index file that supports our landingView
    });

        // our priamry LOGIN/SIGN-IN route
    app.get('/signin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signinView.html', { message: req.flash('loginMessage') });
    });

    // process the signin form
    // app.post('/signin', do all our PASSPORT STUFF HERE);


    // our primary SIGN-UP form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.html', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our PASSPORT STUFF HERE);


    // PROFILE SECTION =====================

    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('userProfile/profileView.html', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
                //removed one extra curly bracket from this line - Jimmy

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        //successRedirect : '#/profile', // redirect to the secure profile section
        failureRedirect : '#/welcome', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }), function(req, res){
            res.status(200).json(req.user);
        }

    );

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

};