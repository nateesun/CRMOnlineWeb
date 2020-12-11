const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()
const Task = require("../models/Member.model")

module.exports = args => {

  router.get("/:line_id", async (req, res, next) => {
    try {
      const lineId = req.params.line_id
      const response = await Task(req.headers.database).getLineId(lineId)
      if (response.status === "Not Found") {
        res.status(404).json({ status: "Not Found" })
      } else {
        const token = jwt.sign({ lineId, database: req.headers.database }, "softpos2013", { expiresIn: 60 * 60 })
        res.status(200).json({ status: "Success", token })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })

  router.post("/login", async (req, res, next) => {
    try {
      const { token } = req.body
      const verifyPass = jwt.verify(token, "softpos2013")
        if (verifyPass) {
          const { lineId, database } = jwt.decode(token)
          const response = await Task(database).verifyTokenLine(lineId)
          const { username, password } = JSON.parse(response.data)
          res.status(200).json({
            status: "Success",
            data: {
              username,
              password,
              database,
            },
          })
        }else{
          return res
            .status(401)
            .json({ status: "Login_Failure", msg: "Login failure" })
        }
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  return router
}
