var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('styles', function(){
  return gulp.src('./styles/theme.scss.liquid')
    .pipe(concat("styles.css"))
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
