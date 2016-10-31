var gulp = require('gulp');
var minify = require('gulp-minify');
var config = require('./gconf.json');
var concat = require('gulp-concat');
var pipes = require('./pipes');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');

const CURRENT_DIR = require('../gulpfile');

const TS_COMPILER_OPTS = require('../tsconfig.json')["compilerOptions"];
const ENV_CONFIG = require('./env.config.js').config;
const CORE_SRC = config.src.main.core;
const CORE_TARGET = config.target.main.core;
const SCRIPTS_SRC = config.src.main.ts;
const SCRIPTS_TARGET = config.target.main.scripts;

const TS_TRANSPILER_CORE_SRC = "node_modules/typescript/lib/typescript.js";

pipes.buildCoreScripts = function(){
	if (!ENV_CONFIG.ts.preCompile) {
		CORE_SRC.push(TS_TRANSPILER_CORE_SRC);
	}
	
	return gulp.src(CORE_SRC)
		.pipe(concat('core.js'))
		.pipe(minify())
		.pipe(gulp.dest(CORE_TARGET))
	;	
}

pipes.buildAppScripts = function(evt) {
    
    var src = SCRIPTS_SRC;
    var target = SCRIPTS_TARGET;
	
	if (typeof evt.path === "string") {
		src = evt.path;

		target = getTargetFolderFromPath(replaceAll(SCRIPTS_TARGET+getScriptPath(src),"\\","/"));
		console.log(target);
	}

	var gulpSrc = gulp.src(src);

	
	if (ENV_CONFIG.ts.preCompile) {
		gulpSrc = gulpSrc.pipe(ts(TS_COMPILER_OPTS));
	}


	
			
	return gulpSrc.pipe(gulp.dest(target));
	
}

pipes.cleanCore = function() {
	return gulp.src(CORE_TARGET,{read:false})
			   .pipe(clean())
	;
}

pipes.cleanScripts = function() {
	return gulp.src(SCRIPTS_TARGET,{read:false})
			   .pipe(clean())
	;
}

function getScriptPath(script) {

	return script.replace(CURRENT_DIR,"");

}

function replaceAll(str,search, replacement) {
    var target = str;
    return target.split(search).join(replacement);
};

function getTargetFolderFromPath(path) {

	return path.replace(new RegExp("(?!.*[\\\/]).*$"), '').replace('src/main/ts/','');

}