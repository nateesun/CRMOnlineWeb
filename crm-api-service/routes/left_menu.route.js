const express = require("express")
const router = express.Router()
const Task = require("../models/LeftMenu.model")

module.exports = args => {

  router.get("/:email", async (req, res, next) => {
    try {
      const response = await Task(req.headers.database).findRole(req.params.email)
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  return router
}
