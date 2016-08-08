var pipes = require('./pipes');

require('./pipes.dependencies');
require('./pipes.scripts');
require('./pipes.server');
require('./pipes.styles');
require('./pipes.templates');
require('./pipes.tests');

module.exports = pipes;