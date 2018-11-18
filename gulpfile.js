// Variables
var gulp = require("gulp");
var concat = require("gulp-concat");

// Concatenate Stylesheets
gulp.task("concat-stylesheets", function(){
  return gulp.src([

    "stylesheets/core/_variables.scss.liquid",
    "stylesheets/core/_layout.scss",
    "stylesheets/core/_typography.scss",

    "stylesheets/sections/_footer.scss",
    "stylesheets/sections/_header.scss",
    "stylesheets/sections/_powered_by.scss",
    "stylesheets/sections/_section.scss",

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
