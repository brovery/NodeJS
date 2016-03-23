var express = require("express");
var passport = require("passport");
var OpenIdConnectStrategy = require("passport-openidconnect").Strategy;
var router = express.Router();

passport.use("openidconnect", new OpenIdConnectStrategy({
    authorizationURL: "https://localhost:9443/oauth2/authorize",
    tokenURL: "https://localhost:9443/oauth2/token",
    userInfoURL: "https://localhost:9443/oauth2/userinfo?schema=openid",
    clientID: "xbdI6JTRA8yzbgZAdEyEj_NxzLca",
    clientSecret: "XAzDCBpz03ds9aB6KbRCSI34aloa",
    callbackURL: "http://127.0.0.1:3000/auth/callback",
    scope: "profile email address phone"
}, function(issuer, subject, profile, jwtClaims, accessToken, refreshToken, params, done) {
    done(null, profile);
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

router.get("/", passport.authenticate("openidconnect"));

router.get("/callback", passport.authenticate("openidconnect"), function(req, res) {
    res.end(JSON.stringify(req.user));
});

module.exports = router;