/**
 * modelExists
 *
 * Check whether the given model exist in either the models or routes directory
 */

const fs = require('fs');
const path = require('path');
const pageModels = fs.readdirSync(
  path.join(__dirname, '../../models'),
);
const pageRoutes = fs.readdirSync(
  path.join(__dirname, '../../routes'),
);
const models = pageModels.concat(pageRoutes);

function modelExists(comp) {
  return models.indexOf(comp) >= 0;
}

module.exports = modelExists;
