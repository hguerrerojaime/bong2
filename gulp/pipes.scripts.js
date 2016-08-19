var gulp = require('gulp');
var minify = require('gulp-minify');
var config = require('./gconf.json');
var concat = require('gulp-concat');
var pipes = require('./pipes');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');

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
	
	if (typeof evt.path === "string") {
		src = evt.path;
	}

	var gulpSrc = gulp.src(SCRIPTS_SRC);
	
	if (ENV_CONFIG.ts.preCompile) {
		gulpSrc.pipe(ts(TS_COMPILER_OPTS));
	}
	
			
	return gulpSrc.pipe(gulp.dest(SCRIPTS_TARGET));
	
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