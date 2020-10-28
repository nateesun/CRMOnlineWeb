const { v4: uuidv4 } = require("uuid")

module.exports = () => {
  const module = {}

  const encodeBase64 = (data) => {
    return Buffer.from(data).toString("base64")
  }

  const decodeBase64 = (data) => {
    return Buffer.from(data, "base64").toString("utf-8")
  }

  module.getDB = (dbTarget, table) => {
    const db = decodeBase64(dbTarget)
    const database = db ? `${db}.` : ""
    const table_name = `${database}${table}`
    return table_name
  }

  module.zeroPad = (num, places) => String(num).padStart(places, "0")

  module.getUUID = () => {
    return uuidv4();
  }

  return module
}
