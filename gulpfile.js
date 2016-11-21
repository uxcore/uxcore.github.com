var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginInlineUrls = require('less-plugin-inline-urls');
var autoprefix = new LessPluginAutoPrefix({
	browsers: ['last 2 versions', 'not ie < 8']
});
var inject = require('gulp-inject-string');

gulp.task('deploy', function() {
  return gulp.src('./_site/**/*')
    .pipe(ghPages({
        branch: 'master'
    }));
});

gulp.task('coding', function() {
  return gulp.src('./_site/**/*')
    .pipe(ghPages({
        // remoteUrl: 'https://git.coding.net/uxcore/uxcore.git',
        origin: 'coding',
        branch: 'master'
    }));
});

gulp.task('less_index', function(){
    return gulp.src(['./style/index.less'])
        .pipe(less({
            plugins: [autoprefix, LessPluginInlineUrls]
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./theme/static/style/'));
});

var fs = require('fs');

gulp.task('less_theme', function() {
    return gulp.src(['./style/theme/*.less'])
        .pipe(less({
            plugins: [autoprefix, LessPluginInlineUrls]
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./theme/static/style/'));
});

gulp.task('less_builder', function () {
    return gulp.src(['./style/builder/index.less'])
        .pipe(less({
            plugins: [autoprefix, LessPluginInlineUrls]
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./theme/static/style/builder/'));
});

gulp.task('less', ['less_index', 'less_theme', 'less_builder'], function(){});

gulp.task('watch', [], function(){
    gulp.watch('./style/**/*.less', ['less']);
});

