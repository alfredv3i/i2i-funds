var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
  var target = gulp.src('./public/views/index.html');
  var sources = gulp.src(['./public/js/*/*.js', './public/js/*.js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./public'));
});

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src('./public/views/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./public'));
});
