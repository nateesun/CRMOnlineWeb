/**
 * modelExists
 *
 * Check whether the given model exist in either the models directory
 */

const fs = require('fs');
const path = require('path');

const pageModels = fs.readdirSync(
  path.join(__dirname, '../../models'),
);

function modelExists(comp) {
  return pageModels.indexOf(comp) >= 0;
}

module.exports = modelExists;
