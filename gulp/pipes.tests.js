var gulp = require('gulp');
var pipes = require('./pipes');
var jasmine = require('gulp-jasmine');
var ts = require('gulp-typescript');
var config = require('./gconf.json');
const reporters = require('jasmine-reporters');

const TS_COMPILER_OPTS = require('../tsconfig.json')["compilerOptions"];
const SCRIPTS_SRC = config.src.main.ts;
const TESTS_SRC = config.src.test.ts;
const TARGET_TEST_SCRIPTS = config.target.test.scripts;
const SPECS_DIR = config.target.test.specs;

pipes.compileTests = function() {
    
    var sources = SCRIPTS_SRC.concat(TESTS_SRC);
    
    return gulp.src(SCRIPTS_SRC)
        .pipe(ts(TS_COMPILER_OPTS))
        .pipe(gulp.dest(TARGET_TEST_SCRIPTS))
    ;
}

pipes.runTests = function() {
    
    return gulp.src(SPECS_DIR)
               .pipe(jasmine({
            reporter: new reporters.JUnitXmlReporter()
    }));
    
}