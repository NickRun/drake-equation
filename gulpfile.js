// Load modules
var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    browserify = require('browserify'),
    del = require('del'),
    source = require('vinyl-source-stream');

// Delete JS files
gulp.task('clean:scripts', function(cb) {
    return del(['dist/assets/scripts/'],cb)
});

// Delete template file
gulp.task('clean:template', function(cb) {
    return del(['dist/index.html'],cb)
});

// Delete image files
gulp.task('clean:images', function(cb) {
    return del(['dist/assets/img/'],cb)
});

// Delete css files
gulp.task('clean:css', function(cb) {
    return del(['dist/assets/css/'],cb)
});

// Livereload
gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

// JS Browserify
gulp.task('js', ['clean:scripts'], function () {
    return browserify('./src/scripts/main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/assets/js'));
});

// Images
gulp.task('images', ['clean:images'], function() {
    return gulp.src('./src/img/**/*')
        // .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'images task complete' }));
});

// Template
gulp.task('template', ['clean:template'], function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'template task complete' }));
});

// Styles
gulp.task('styles', ['clean:css'], function() {
    return sass('./src/sass/main.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dist/assets/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/styles/'))
        .pipe(notify({ message: 'styles task complete' }));
});

// Build
gulp.task('build', function() {
    gulp.start('template'); 
    gulp.start('styles');
    gulp.start('js');
    gulp.start('images');
});

// Development Tasks
gulp.task('watch', ['webserver'], function () {
    watch('./src/index.html', function () {
        gulp.start('template'); 
    });
    watch('./src/sass/**/*.scss', function () {
        gulp.start('styles');
    });
    watch('./src/scripts/**/*.js', function () {
        gulp.start('js');
    });
    watch('./src/img/**/*', function () {
        gulp.start('images');
    });
});