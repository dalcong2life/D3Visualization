var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server', function () {
    return browserSync.init({
        server: {
            baseDir: 'src',
            index: 'html/index.html',
            routes: {
                'html': 'html'
            }
        }
    })
});


gulp.task('watch', function () {
    console.log('watch task');
    gulp.watch('src/html/*.+(html|md)').on('change', reload);

    gulp.watch('src/js/**/*.js').on('change', reload);
});

gulp.task('default', ['server', 'watch'], function () {
    console.log('default task');
});
