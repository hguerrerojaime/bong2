"use strict";

const gulp = require('gulp');
const actions = require('../actions/index');

gulp.task('clean-dependencies',actions.cleanDependencies);
gulp.task('refresh-dependencies',['clean-dependencies'],actions.loadDependencies);