"use strict";

const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const buildConfig = require('../build.config.json');

module.exports = () => {

    let skinSrc = buildConfig.skin.src;
    let skinPaths = buildConfig.skin.paths;
    let skinFilename = buildConfig.skin.filename;
    let skinTarget = buildConfig.target.less;

    return gulp.src(skinSrc)
        .pipe(less({
            compress: true,
            paths: skinPaths
        }))
        .pipe(rename(skinFilename))
        .pipe(gulp.dest(skinTarget))
    ;

}
