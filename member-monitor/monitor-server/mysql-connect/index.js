const Promise = require('bluebird');
const mysql = require('mysql');
const config = require('../config')

const pool = mysql.createPool(config.database);
pool.query = Promise.promisify(pool.query);

module.exports = pool;
