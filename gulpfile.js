var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('default', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch('app/*.*').on('change', browserSync.reload);
    gulp.watch('app/**/*.*').on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('app/components/*/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles"))
        .pipe(browserSync.stream());
});
