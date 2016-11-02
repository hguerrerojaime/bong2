const CURR_DIR = __dirname;

module.exports = CURR_DIR;

var gulp = require('gulp');
var pipes = require('./gulp/pipes.all');

gulp.task('clean-dependencies',pipes.cleanDependencies);
gulp.task('refresh-dependencies',['clean-dependencies'],pipes.loadDependencies);

/** LESS **/
gulp.task('build-skin',pipes.buildSkin);
gulp.task('clean-styles',pipes.cleanStyles);

/** JS/TS **/
gulp.task('clean-core',pipes.cleanCore);
gulp.task('clean-scripts',pipes.cleanScripts);
gulp.task('build-scripts-core',pipes.buildCoreScripts);
gulp.task('build-scripts-app',pipes.buildAppScripts);
gulp.task('build-scripts',['build-scripts-core','build-scripts-app']);

/** HTML **/
gulp.task('clean-templates',pipes.cleanTemplates);
gulp.task('build-templates',pipes.buildTemplates);

/** CLEAN ALL **/
gulp.task('clean',['clean-dependencies','clean-scripts','clean-styles','clean-templates']);

/** CREATE A DIST ZIP FILE **/
gulp.task('build',['refresh-dependencies','compile'],pipes.build);

/** DEPLOY A DIST ZIP FILE INTO A FTP SERVER **/
gulp.task('deploy',['build'],pipes.deploy);

/** COMPILE ONLY **/
gulp.task('compile',['build-skin','build-scripts','build-templates']);

/** COMPILE AND RUN SERVER **/
gulp.task('server',['compile'],pipes.server);

gulp.task('run-mock-api',pipes.runMockApi);

gulp.task('compile-tests',pipes.compileTests);

gulp.task('run-tests',['compile-tests'],pipes.runTests);




