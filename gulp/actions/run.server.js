"use strict";

const gulp = require('gulp');
const server = require('gulp-server-livereload');
const buildConfig = require('../build.config.json');
const CUR_DIR = require('../../gulp.dirname');

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

        let src = event.path.replace(CUR_DIR+"\\","");
        let target = buildConfig.target.ts;

        console.log('<- script change detected, rebuilding... ->');

        callbacks.buildScripts(src,target)
    });

    gulp.watch(templatesSrc,(event) => {
        let src = event.path.replace(CUR_DIR+"\\","");
        let target = buildConfig.target.html;

        console.log('<- template change detected, rebuilding... ->');

        callbacks.buildTemplates(src,target)
    });
    gulp.watch(skinSrc,(event) => {

        console.log('<- skin change detected, rebuilding... ->');

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
