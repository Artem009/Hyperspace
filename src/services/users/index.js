const { create } = require('./create');
const read = require('./read');
const { update } = require('./update');
const destroy = require('./remove');

module.exports = { create, read, update, destroy };