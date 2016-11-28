"use strict";

const gulp = require('gulp');
const actions = require('../actions/index');

gulp.task('build-core',() => {

    actions.buildCore();

});