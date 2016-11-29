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

        let src = event.path;
        let target = getTargetFolderFromPath(replaceAll(buildConfig.target.ts+getScriptPath(src),"\\","/"));

        console.log('<- script change detected, rebuilding... ->');

        console.log(target);

        callbacks.buildScripts(src,target);
    });

    gulp.watch(templatesSrc,(event) => {
        let src = event.path;
        
        //TODO need to find a better solution
        let target = getTargetFolderFromPath(replaceAll(buildConfig.target.html+getScriptPath(src),"\\","/"));
        target = target.replace('application/src/html','');
        console.log('<- template change detected, rebuilding... ->');

        console.log(target);

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
            livereload: true,
            open:true,
            fallback: "index.html"
        }))

    ;
}


function getScriptPath(script) {
	return script.replace(CUR_DIR,"");
}

function replaceAll(str,search, replacement) {
    var target = str;
    return target.split(search).join(replacement);
};

function getTargetFolderFromPath(path) {

	return path.replace(new RegExp("(?!.*[\\\/]).*$"), '').replace('/modules','');

}