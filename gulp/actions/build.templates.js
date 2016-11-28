"use strict";

const gulp = require('gulp');

module.exports = (src,target) => {
    return gulp.src(src)
               .pipe(gulp.dest(target))   
    ;
}