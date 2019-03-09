var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('styles', function(){
  return gulp.src('./styles/theme.scss')
    .pipe(concat("theme.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'))
});

gulp.task('scripts', function(){
  return gulp.src('./scripts/*.js')
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest('assets'))
});

gulp.task('watch', function(){
  gulp.watch('./styles/**/*.scss*', gulp.series('styles'));
  gulp.watch('./scripts/*.js', gulp.series('scripts'));
})

gulp.task('default', gulp.series('styles','scripts','watch'));
