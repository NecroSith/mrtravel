var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('default', ['server'], function() {
    // content
});

gulp.task('server', ['less'], function() {
    // content
    browserSync.init({
    	server: { baseDir: './src/'}
    });
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/less/**/*.*', ['less']);
});

gulp.task('less', function() {
    // content
    return gulp.src('./src/less/main.less')
      .pipe(less())
      .pipe(gulp.dest('./src/css/'))
      .pipe(browserSync.stream());
});