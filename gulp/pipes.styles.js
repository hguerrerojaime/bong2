var gulp = require('gulp');
var less = require('gulp-less');
var pipes = require('./pipes');
var config = require('./gconf.json');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

const SKIN_SRC = config.src.main.skin;
const STYLES_TARGET = config.target.main.styles;

pipes.buildSkin = function() {
	return gulp.src(SKIN_SRC)
	    .pipe(less({
	        compress:true,
	        paths:[ 'src/main/less', 'node_modules/bootstrap/less/' ]
	    }))
	    .pipe(rename("skin.min.css"))
	    .pipe(gulp.dest(STYLES_TARGET))
	;
};

pipes.cleanStyles = function() {
	return gulp.src(STYLES_TARGET,{read:false})
			   .pipe(clean())
	;
}