const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const gtag = require('gulp-gtag');
const sitemap = require('gulp-sitemap'); 

function htmlImport() {
    return gulp.src('./src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
}

function googlesitemap() {
    return gulp.src('./*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'https://www.virtech-ksa.com/'
        }))
        .pipe(gulp.dest('./dist'));
}

function googleAnalytics() {
    return gulp.src('./src/*.html')
        .pipe(gtag({ uid: 'UA-161594957-1', tag: 'head' }))
        .pipe(gulp.dest('./src'));
}

// copy html files
exports.default = function () {
    gulp.watch(['src/*.html'],{events:'all'},gulp.series(htmlImport));
    // var watcher = gulp.watch(["src/*.html"]);
    // watcher.on('change', function (obj) {
    //     return gulp.src(obj, { base: 'src/' })
    //         .pipe(fileinclude({
    //             prefix: '@@',
    //             basepath: '@file'
    //         }))
    //         .pipe(gulp.dest('./'));
    // });
}

exports.htmlImport = htmlImport;
exports.googlesitemap = googlesitemap;
exports.googleAnalytics = googleAnalytics;