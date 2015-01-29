/**
 * Created by bluezip on 1/29/15 AD.
 */

'use strict';

var gulp      = require('gulp');
var mocha     = require('gulp-mocha');


gulp.task('test', function() {
  gulp
    .src('./lib/**/*.spec.js')
    .pipe(
      mocha({ reporter: 'spec'})
        .on('error', function (err) {
          console.log(err);
      })
    );
});


gulp.task('default', ['test'], function() {
    gulp.watch("./lib/**/*.spec.js", ['test']);
});
