var express = require('express');
var passport = require('passport')
	, LocalStrategy = require('passport-local').Strategy;

var app = express();

var bodyParser = require('body-parser');

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.post('/login', function(req, res, next)  {
	console.log(req.body);
	passport.authenticate('local', function(err, user, info)  {
		console.log(user, info);
		res.send('end');
	})(req, res, next);
});


app.listen(3000, function() {
	console.log('App listening on port 3000...');
});


passport.use(new LocalStrategy(
	function(username, password, done) {
		console.log(username, password);
		User.findOne({ username: username }, function(err, user) {
			if (err) { return done(err); }
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		});
	}
));