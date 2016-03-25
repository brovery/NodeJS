var gulp = require('gulp');
var inquirer = require('inquirer');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var install = require('gulp-install');
var util = require('gulp-util');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var _string = require('underscore.string');
var inflection = require('inflection');
var replace = require('gulp-replace');
var merge = require('merge-stream');
var endOfLine = require('os').EOL;


gulp.task('default', function(done) {
	util.log('Starting our generator');

	inquirer.prompt(
		[
			{ type: 'confirm', name: 'areyouready', message: 'Are you ready?' }
		],
		function(answers) {
			if (!answers.areyouready) {
				util.log('Get ready then!');
				return done();
			}

			getSpecifics(done);
		}
	);

});

function getSpecifics(done) {
	inquirer.prompt(
		[
			{
				type: 'input',
				name: 'packageName',
				message: 'What name to use in package.json? (no spaces)',
				default: 'our-project'
			},
			{
				type: 'input',
				name: 'title',
				message: 'What title would you like the web page to have?'
			},
			{
				type: 'input',
				name: 'port',
				message: 'What Port would you like to use?',
				default: '3000'
			},
			{
				type: 'input',
				name: 'ip',
				message: 'What ip would you like the web page to have?',
				default: '10.0.112.168'
			}
		],
		function(answers) {
			gulp.src([
				__dirname + '/templates/our-project/**/*'
			])
			.pipe(template(answers))
			.pipe(conflict('./'))
			.pipe(gulp.dest('./'))
			// .pipe(gulpif(answers.install, install()))
			.on('end', function() {
				done();
			})
			.resume();
		});
}

return gulp;
