'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
      pattern: ['gulp-*']
    });

gulp.task('default', function () {
    gulp.start('build');
});

gulp.task('build', function() {
  return gulp.src('lib/*')
        .pipe($.sass())
        .pipe(gulp.dest('build'));
});
