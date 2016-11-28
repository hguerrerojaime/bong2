"use strict";

const gulp = require('gulp');
const server = require('gulp-server-livereload');
const buildConfig = require('../build.config.json');

module.exports = (_callbacks) => {

    let callbacks = Object.assign({
        buildScripts: (src,target) => {},
        buildTemplates: (src,target) => {},
        buildSkin: ()=> {}
    },_callbacks);

    let scriptsSrc = buildConfig.server.watchSources.ts;
    let skinSrc = buildConfig.server.watchSources.less;
    let templatesSrc = buildConfig.server.watchSources.html;

    gulp.watch(scriptsSrc,(event) => {
        let src = event.path;
        let target = buildConfig.target.ts;
        callbacks.buildScripts(src,target)
    });

    gulp.watch(templatesSrc,(event) => {
        let src = event.path;
        let target = buildConfig.target.html;
        callbacks.buildTemplates(src,target)
    });
    gulp.watch(skinSrc,(event) => {
        callbacks.buildSkin();
    });

    let serverDir = buildConfig.server.dir;
    let serverPort = buildConfig.server.port;

    gulp.src(serverDir)
        .pipe(server({
            port: serverPort,
            liveReload: {
                enabled:true
            },
            open:true,
            fallback: "index.html"
        }))

    ;
}
