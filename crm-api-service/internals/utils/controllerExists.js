/**
 * controllerExists
 *
 * Check whether the given controller exist in either the controllers directory
 */

const fs = require('fs');
const path = require('path');

const pageControllers = fs.readdirSync(
  path.join(__dirname, '../../controllers'),
);

function controllerExists(comp) {
  return pageControllers.indexOf(comp) >= 0;
}

module.exports = controllerExists;
