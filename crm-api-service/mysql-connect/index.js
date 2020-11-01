const Promise = require("bluebird")
const mysql = require("mysql")
const config = require("../config")

console.log("mysql-connect call:")
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  connectionLimit: config.connectionLimit,
  connectTimeout: config.connectTimeout,
  acquireTimeout: config.acquireTimeout,
  waitForConnections: config.waitForConnections,
  queueLimit: config.queueLimit,
})

pool.query = Promise.promisify(pool.query)

module.exports = pool
