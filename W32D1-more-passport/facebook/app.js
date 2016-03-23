var express = require('express');
var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;
var app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(require('body-parser').urlencoded({ extended: true }));


passport.use(new FacebookStrategy({
        clientID: '1513428978966550',
        clientSecret: '108a9f03cc210257672214da46cc9764',
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        cb(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.get('/', function(req, res) {
    res.send("Hello World!<p><a href='/auth/facebook'>Login with facebook</a></p>");
});

app.get('/login', function(req, res) {
    res.send("Login page");
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

app.listen(3000, function() {
    console.log('App listening on port 3000...');
});