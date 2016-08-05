var gulp = require('gulp');
var pipes = require('./pipes');
var config = require('./gconf.json');
var server = require('gulp-server-livereload');
var batch = require('gulp-batch');

require('./pipes.scripts');
require('./pipes.templates');

const SCRIPTS_SRC = config.src.main.ts;
const TEMPLATES_SRC = config.src.main.html;
const LESS_SRC = config.src.main.less;


pipes.server = function () {

    gulp.watch([SCRIPTS_SRC],function (event) {
        pipes.buildAppScripts(event);
    });
    
    gulp.watch([LESS_SRC],function (event) {
        gulp.start('build-skin', event);
    });
	
	gulp.watch([TEMPLATES_SRC],function (event) {
        pipes.buildTempaltes(event);
    });
    
    gulp.src('server')
        .pipe(server({
            port:3000,
            livereload: {
                enable: true
            },
            open: true,
            fallback: 'index.html',
			log: false
    }));
    
};