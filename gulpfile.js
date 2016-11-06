var gulp = require('gulp');
var jade = require('gulp-pug');
var stylus = require('gulp-stylus');

var config = {
	paths: {
		dist: './dist/client/',
		js: ['./src/client/**/*.js', './src/client/*.js'],
		html: ['./src/client/**/*.jade', './src/client/*.jade'],
		css: './src/client/**/*.stylus'
	}
};

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(jade())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(stylus())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('js', function() {
	gulp.src(config.paths.js)
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.css, ['css']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'watch']);
