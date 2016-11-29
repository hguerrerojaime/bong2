"use strict";

const gulp = require('gulp');
const buildCore = require('../actions/build.core');

gulp.task('build-core',() => {

    buildCore();

});