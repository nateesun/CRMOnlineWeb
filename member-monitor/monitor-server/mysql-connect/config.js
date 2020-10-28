const config = {
  host: "localhost",
  user: "root",
  password: 'myPassword',
  database: "mycrmbranch",
  databaseServer: Buffer.from("webdaily_001").toString("base64"),
  port: 3306,
  connectionLimit: 5,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  waitForConnections: true,
  queueLimit: 0,
}

module.exports = config;
