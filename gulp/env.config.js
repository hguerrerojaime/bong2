var argv = require('yargs').argv;

const DEFAULT_ENV_CONFIG = require('./environments/default.json');
const CURRENT_ENVIRONMENT = typeof argv.env === "string" ? argv.env : "development";
const CURRENT_ENV_CONFIG = require('./environments/'+CURRENT_ENVIRONMENT+'.json');

const ENV_CONFIG = Object.assign(DEFAULT_ENV_CONFIG,CURRENT_ENV_CONFIG);

module.exports = { current: CURRENT_ENVIRONMENT, config: ENV_CONFIG };