var gulp = require('gulp');
var pipes = require('./pipes');
var gnf = require('gulp-npm-files');
var clean = require('gulp-clean');
var config = require('./gconf.json');

const DEPENDENCIES_DIR = config.target.main.dependencies;
const VENDORS_DIR = config.target.main.vendors;

pipes.cleanDependencies = function() {
	return gulp.src(DEPENDENCIES_DIR,{read:false})
		.pipe(clean());
};

pipes.loadDependencies = function() {
	
	return gulp.src(gnf(),{base:'./'}).pipe(gulp.dest(VENDORS_DIR));
	
}