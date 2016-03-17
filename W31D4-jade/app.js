
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', routes.index);
app.get('/about', function(req, res, next){
    res.render("about", {me: [
        "Awesome",
        "But this doesn't work"
    ]});
});
app.get('/contact', function(req, res, next) {
    res.render("contact");
});
app.post("/contact", function(req, res, next) {
    //res.render("hello", req.body);
    res.redirect("/hello?name=" + req.body.name + "&email=" + req.body.email);
});
app.get("/hello", function(req, res, next) {
    res.render("hello", req.query);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
