"use strict";

const gulp = require('gulp');
const gnf = require('gulp-npm-files');
const clean = require('gulp-clean');
const buildConfig = require('../build.config.json');

module.exports = {
    clean: () => {
        let nodeModulesDir = buildConfig.dependencies.nodeModules;
        return gulp.src(nodeModulesDir,{read:false})
            .pipe(clean());
    },
    load: () => {
        let vendorsDir = buildConfig.dependencies.vendors;
        return gulp.src(gnf(),{base:'./'})
            .pipe(gulp.dest(vendorsDir))
        ;
    }
};
