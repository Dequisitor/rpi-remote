var gulp = require('gulp');
var jade = require('gulp-pug');
var stylus = require('gulp-stylus');

var config = {
	paths: {
		dist: './www',
		js: ['./src/client/**/*.js', './src/client/*.js'],
		json: ['./src/client/**/*.json', './src/client/*.json'],
		html: ['./src/client/**/*.jade', './src/client/*.jade'],
		vendor: './src/client/node_modules/**/*',
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

gulp.task('json', function() {
	gulp.src(config.paths.json)
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('vendor', function() {
	gulp.src(config.paths.vendor)
		.pipe(gulp.dest(config.paths.dist + '/node_modules'));
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.css, ['css']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'json', 'vendor', 'watch']);
