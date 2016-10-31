const gulp = require('gulp');
const zip = require('gulp-zip');
const ftpClient = require('ftp-client');
const config = require('./gconf.json');
const pipes = require('./pipes');
const packageConf = require("../package.json");

const ENV_CONFIG = require('./env.config.js').config;
const SERVER_DIR = config.target.server.dir;
const TARGET_DIST = config.target.main.dist;

const BUILD_NAME = packageConf.name;
const BUILD_VERSION = packageConf.version;
const BUILD_SUFFIX = ENV_CONFIG.build.suffix;

pipes.build = function() {

	return gulp.src(SERVER_DIR+"/**")
		.pipe(zip(getFileName()))
		.pipe(gulp.dest(TARGET_DIST))
	;

}

pipes.deploy = function() {

	console.log("Connecting to FTP Server");

	var ftp = new ftpClient(ENV_CONFIG.ftp.config,ENV_CONFIG.ftp.options);
	var buildPath = "/"+TARGET_DIST+"/"+getFileName();

	ftp.connect(function() {
		console.log("connected to ftp");
		console.log("uploading: "+buildPath);
		

		ftp.upload([buildPath], '/', {}, function (result) {
	        console.log(result);
	    });
	});

}

function getFileName() {
	return BUILD_NAME+BUILD_SUFFIX+"-"+BUILD_VERSION+".zip";
}