var gulp = require('gulp');
var minify = require('gulp-minify');
var config = require('./gconf.json');
var concat = require('gulp-concat');
var pipes = require('./pipes');

const CORE_SRC = config.src.main.core;
const CORE_TARGET = config.target.main.core;
const SCRIPTS_SRC = config.src.main.ts;
const SCRIPTS_TARGET = config.target.main.scripts;

pipes.buildCoreScripts = function(){
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

	return gulp.src(SCRIPTS_SRC)
			.pipe(gulp.dest(SCRIPTS_TARGET))
	;
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