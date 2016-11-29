"use strict";

const gulp = require('gulp');
const actions = require('../actions/index');

gulp.task('run-server',['build-scripts','build-core','build-skin','build-templates','refresh-dependencies'],() => {

    return actions.runServer({
        buildScripts: actions.buildScripts,
        buildTemplates: actions.buildTemplates,
        buildSkin: actions.buildSkin
    });
});

gulp.task('run-server-only', () => {
    return actions.runServer({
        buildScripts: actions.buildScripts,
        buildTemplates: actions.buildTemplates,
        buildSkin: actions.buildSkin
    });
});