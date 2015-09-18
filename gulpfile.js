var gulp = require('gulp'),
    react = require('gulp-react'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    runSequence = require('run-sequence').use(gulp),
    shell = require('gulp-shell'),
    plugins = require('gulp-load-plugins')({scope: ['dependencies']}),
    sass = require('gulp-sass');

var compileSass = function(src, dest) {
    return gulp.src(src)
        .pipe(sass({errLogToConsole: false,onError: function(err) {return notify().write(err);}}))
        .pipe(gulp.dest(dest));
};

var compileJsx = function(src, dest) {
    return gulp.src(src)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error %>")
        }))
        .pipe(react())
        .pipe(gulp.dest(dest));
};

gulp.task('sass', function() {
    return compileSass('css/base.scss', 'css');
});

gulp.task('jsx', function() {
    return compileJsx('js/views/**/*.jsx', 'js/_jsx/views');
});

gulp.task('runServer', function() {
    nodemon({
        script: 'server.js',
        ext: 'scss jsx js',
        ignore: ['js/_jsx/**/.js'],
        tasks: ['sass', 'jsx'] })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('jest', shell.task('npm test', {
    // So our task doesn't error out when a test fails
    ignoreErrors: true
}));


gulp.task('test', function () {
  runSequence('jest');
  gulp.watch(['scripts/*.js','__test__/*.js'], ['jest']);
});

gulp.task('default', function(callback) {
    runSequence(['jsx', 'sass'], 'runServer', callback);
});