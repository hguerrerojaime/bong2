"use strict";

const gulp = require('gulp');
const buildConfig = require('../build.config.json');
const buildScripts = require('../actions/build.scripts');
const argv = require('yargs').argv;

const ALL_MODULES = buildConfig.modules;

const MODULES = typeof argv.module === "string" ? [argv.module] : ALL_MODULES;

gulp.task('build-scripts',() => {

    for (let module of MODULES) {

        if (ALL_MODULES.indexOf(module) < 0) {
            throw "Module "+module+" NOT Found";
        }

        let src = buildConfig.src.ts.map((path) => {
            return path.replace(new RegExp("\\{moduleName\\}", 'g'), module);
        });
        let target = buildConfig.target.ts+"/"+module;

        console.log("<< BUILDING MODULE ["+module+"] >>");

        buildScripts(src,target);

    }

});