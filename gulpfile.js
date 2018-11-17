// Variables
var gulp = require("gulp");
var concat = require("gulp-concat");

// Concatenate Stylesheets
gulp.task("concat-stylesheets", function(){
  return gulp.src([

    "stylesheets/base/_variables.scss.liquid",
    "stylesheets/base/_document.scss",
    "stylesheets/base/_typography.scss",

    "stylesheets/sections/_footer.scss",
    "stylesheets/sections/_header.scss",
    "stylesheets/sections/_powered_by.scss"

  ])
  .pipe(concat("styles.scss.liquid"))
  .pipe(gulp.dest("./assets"));
});

// Concatenate Javascripts
gulp.task("concat-javascripts", function(){
  return gulp.src([

  ])
  .pipe(concat("scripts.js"))
  .pipe(gulp.dest("./assets"));
});

// Watch
gulp.task("watch", function() {
  gulp.watch("./stylesheets/**/*.scss*", ["concat-stylesheets"]);
  gulp.watch("./javascripts/**/*.js", ["concat-javascripts"]);
});

// Default
gulp.task("default", ["concat-stylesheets","concat-javascripts","watch"]);
