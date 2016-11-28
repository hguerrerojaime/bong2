"use strict";

const actions = {
    buildCore: require('./build.core'),
    buildScripts: require('./build.scripts'),
    buildSkin: require('./build.skin'),
    buildTemplates: require('./build.templates'),
    dependencies: require('./dependencies'),
    runServer: require('./run.server')
};

module.exports = actions;