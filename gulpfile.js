const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssNano = require("cssnano");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();

//In gulp 4 tasks are functions
// STEP 1 CREATE THE DIFFERENT TASKS
// Sass Task
function scssTask() {
  return src("project/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssNano()]))
    .pipe(dest("public/css", { sourcemaps: "." }));
}

// Javascript Task
function jsTask() {
  return src("project/js/script.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("public/js", { sourcemaps: "." }));
}

// BrowserSync Run Server Task
function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: "public/",
    },
  });
  cb();
}

// BrowserSync Reload Server Task
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

// the watch task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["project/scss/**/*.scss", "project/js/**/*.js"],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// STEP 2 ADD THE TASKS TO THE GULP WORKFLOW

// The Default Gulp Task
// this is the task that runs if you type gulp in the command line
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);
