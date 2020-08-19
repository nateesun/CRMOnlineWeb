require('dotenv').config({ path: '.env' });
const config = require('config');

module.exports = configName => {
  const isNil = variable => typeof variable === 'undefined';
  if (!isNil(process.env[configName])) return process.env[configName];
  if (!isNil(config[configName])) return config[configName];
  if (config.has(configName) && !isNil(config.get(configName))) {
    return config.get(configName);
  }
  return null;
};
