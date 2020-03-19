const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

function htmlImport() {
    return gulp.src('./src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
}

// copy html files
exports.default = function () {
    // gulp.watch(['src/*.html'],{events:'all'},gulp.series(htmlImport));
    var watcher = gulp.watch(["src/*.html"]);
    watcher.on('change', function (obj) {
        return gulp.src(obj, { base: 'src/' })
            .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest('./'));
    });
}

exports.htmlImport = htmlImport;