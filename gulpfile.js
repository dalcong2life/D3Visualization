var gulp = require("gulp");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task("default", ["webpack-dev-server"]);

gulp.task("webpack-dev-server", function (callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        publicPath: "/" + myConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function (err) {
            if (err) {
                throw new Error('error');
            }

        });
});


//var browserSync = require('browser-sync').create();
//var reload = browserSync.reload;

//gulp.task('server', function () {
//    return browserSync.init({
//        server: {
//            baseDir: 'src',
//            index: 'html/index.html',
//            routes: {
//                'html': 'html'
//            }
//        }
//    })
//});
//
//gulp.task('watch', function () {
//    console.log('watch task');
//    gulp.watch('src/html/*.+(html|md)').on('change', reload);
//
//    gulp.watch('src/js/**/*.js').on('change', reload);
//});
//
//gulp.task('default', ['server', 'watch'], function () {
//    console.log('default task');
//});
