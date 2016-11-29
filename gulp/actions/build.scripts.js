"use strict";

const gulp = require('gulp');
const ts = require('gulp-typescript');
const minify = require('gulp-minify');
const compilerOptions = require('../../tsconfig.json')["compilerOptions"];

module.exports = (src,target) => {

    return gulp.src(src)
        .pipe(ts(compilerOptions))
        .pipe(gulp.dest(target))
    ;

}