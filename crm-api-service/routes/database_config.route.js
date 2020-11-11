/* DatabaseConfig.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/DatabaseConfig.model")

module.exports = args => {

  router.get("/", async (req, res) => {
    const response = await Task().findAll()
    const data = JSON.parse(response.data)
    const database = []
    for(let i=0;i<data.length;i+=1){
      if(data[i].Database !== 'information_schema' && data[i].Database !== 'mysql' && data[i].Database !== 'sys'){
        const encryptDb = Buffer.from(data[i].Database).toString('base64');
        database.push({
          database: data[i].Database,
          encrypt: encryptDb,
          query: `/?data=${encryptDb}`
        });
      }
    }
    res.status(200).json({
      status: response.status,
      msg: "Success",
      data: database,
    })
  })
  
  return router
}
