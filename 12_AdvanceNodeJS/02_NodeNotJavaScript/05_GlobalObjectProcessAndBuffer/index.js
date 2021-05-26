// instead of reading directly from
process.env.PORT

// read from a configurable utility file
const { config } = require('./util');

// makes it possible to re-config later
config.port