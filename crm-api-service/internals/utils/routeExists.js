/**
 * routeExists
 *
 * Check whether the given route exist in either the routes directory
 */

const fs = require('fs');
const path = require('path');

const pageRoutes = fs.readdirSync(
  path.join(__dirname, '../../routes'),
);

function routeExists(comp) {
  return pageRoutes.indexOf(comp) >= 0;
}

module.exports = routeExists;
