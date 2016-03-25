var gulp = require("gulp");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var concat = require("gulp-concat-css");

gulp.task("minify-css", function() {
    gulp.src("client/*.css")
        .pipe(concat("bundle.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("client/dist"));
});