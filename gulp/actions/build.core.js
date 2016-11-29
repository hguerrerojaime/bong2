"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const buildConfig = require('../build.config.json');

module.exports = () => {

    let coreSrc = buildConfig.core.src;
    let coreTarget = buildConfig.target.core;

    return gulp.src(coreSrc)
        .pipe(concat('core.js'))
        .pipe(minify())
        .pipe(gulp.dest(coreTarget))
    ;

}