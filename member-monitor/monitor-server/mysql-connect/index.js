const Promise = require('bluebird');
const mysql = require('mysql');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "myPassword",
  database: 'mycrmbranch',
  port: 3306,
  connectionLimit: 5,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  waitForConnections: true,
  queueLimit: 0
});
pool.query = Promise.promisify(pool.query);

module.exports = pool;
