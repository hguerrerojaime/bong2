var gulp = require('gulp');
var pipes = require('./pipes');
var clean = require('gulp-clean');
var config = require('./gconf.json');

const TEMPLATES_SRC = config.src.main.html;
const TEMPLATES_TARGET = config.target.main.templates;

pipes.buildTemplates = function(evt) {
    
    var src = TEMPLATES_SRC;
	
	if (typeof evt.path === "string") {
		src = evt.path;
	}
    
	return gulp.src(TEMPLATES_SRC)
			   .pipe(gulp.dest(TEMPLATES_TARGET))
	;
}

pipes.cleanTemplates = function() {
    
    return gulp.src(TEMPLATES_TARGET,{read:false})
			   .pipe(clean())
	;
    
}