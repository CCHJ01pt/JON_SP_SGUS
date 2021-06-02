'use strict';

const gulp = require('gulp'),
      mocha = require('gulp-mocha'),
      gLog = require('fancy-log');

// create a task
gulp.task('mocha', () =>{
   // locate .src of file
   return gulp.src(['test/*.js'], {read:false})
   // add a gulp-mocha reporter
   .pipe(mocha({reporter: 'list'}))
   // if error, log out with gLog
   .on('error', gLog);
});

gulp.task('mocha-watch', () => {
   // gulp.run('mocha'); !!Deprecated
   // 1st param: watch any file with .js ext and test dir
   // 2nd param: array of tasks to run
   gulp.watch(['./**/*.js', 'test/**/*.js'], { ignoreInitial: false }, gulp.series('mocha'));
});

// create a default task to run
// gulp.task('default', ['mocha-watch']); !!Deprecated
gulp.task('default', gulp.series('mocha-watch'));
