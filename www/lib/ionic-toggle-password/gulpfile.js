var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var file = './src/ion-toggle-password.js';
var dist = './dist';

gulp.task('default', ['lint'], function(done) {
	gulp.src(file)
	.pipe(uglify())
	.pipe(rename({extname: ".min.js"}))
	.pipe(gulp.dest(dist))

	gulp.src(file)
	.pipe(gulp.dest(dist))

	.on('end', done);
});

gulp.task('lint', function() {
	gulp.src(file)
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});