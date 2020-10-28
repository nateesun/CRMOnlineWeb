const Promise = require('bluebird');
const mysql = require('mysql');
const config = require('./config')

const pool = mysql.createPool(config);
pool.query = Promise.promisify(pool.query);

module.exports = pool;
