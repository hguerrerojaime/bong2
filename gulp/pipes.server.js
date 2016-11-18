var gulp = require('gulp');
var pipes = require('./pipes');
var config = require('./gconf.json');
var server = require('gulp-server-livereload');
var batch = require('gulp-batch');

require('./pipes.scripts');
require('./pipes.styles');
require('./pipes.templates');

const SCRIPTS_SRC = config.src.main.ts;
const TEMPLATES_SRC = config.src.main.html;
const LESS_SRC = config.src.main.less;
const SERVER_DIR = config.target.server.dir;
const SERVER_PORT = config.target.server.port;


pipes.server = function () {

    gulp.watch([SCRIPTS_SRC],function (event) {
        pipes.buildAppScripts(event);
    });
    
    gulp.watch([LESS_SRC],function (event) {
        pipes.buildSkin();
    });
	
	gulp.watch([TEMPLATES_SRC],function (event) {
        pipes.buildTemplates(event);
    });
    
    gulp.src(SERVER_DIR)
        .pipe(server({
            port:SERVER_PORT,
            livereload: {
                enable: true
            },
            open: true,
            fallback: 'index.html'
    }));
    
};