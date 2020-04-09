const gulp = require('gulp'); 
const gtag = require('gulp-gtag');
const sitemap = require('gulp-sitemap'); 

 

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
 
exports.googlesitemap = googlesitemap;
exports.googleAnalytics = googleAnalytics;