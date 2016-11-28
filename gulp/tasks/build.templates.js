"use strict";

const gulp = require('gulp');
const buildConfig = require('../build.config.json');
const actions = require('../actions/index');

gulp.task('build-templates',() => {

    let src = buildConfig.src.html;
    let target = buildConfig.target.html;

    return actions.buildTemplates(src,target);

});