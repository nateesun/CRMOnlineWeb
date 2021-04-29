const Promise = require("bluebird")
const mysql = require("mysql")

const config = require("../config")

console.log("mysql-connect call:")
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  connectionLimit: config.connectionLimit,
  connectTimeout: config.connectTimeout,
  acquireTimeout: config.acquireTimeout,
  waitForConnections: config.waitForConnections,
  queueLimit: config.queueLimit,
})

pool.query = Promise.promisify(pool.query)

module.exports = pool
