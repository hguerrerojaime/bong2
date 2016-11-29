"use strict";

const gulp = require('gulp');
const actions = require('../actions/index');

gulp.task('clean-dependencies',actions.dependencies.clean);
gulp.task('refresh-dependencies',['clean-dependencies'],actions.dependencies.load);