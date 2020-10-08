const Promise = require('bluebird');
const mysql = require('mysql');

const path = `../config/${process.env.API_SERVER||'local'}-db.json`;
const data = require(path);

console.log('config file from ', path);

data.map(config => {
    console.log('mysql-connect call:');
    
    const pool = mysql.createPool({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port,
      connectionLimit: config.connectionLimit,
      connectTimeout: config.connectTimeout,
      acquireTimeout: config.acquireTimeout,
      waitForConnections: config.waitForConnections,
      queueLimit: config.queueLimit
    });

    // pool.query = util.promisify(pool.query)
    pool.query = Promise.promisify(pool.query);
    
    module.exports = pool;
})
