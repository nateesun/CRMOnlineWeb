const express = require("express")
const router = express.Router()
const Task = require("../models/Promotion.model")

router.get("/", (req, res, next) => {
  Task.findShowUser((err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      const data = JSON.parse(response.data)
      res.status(200).json({
        status: response.status,
        msg: "Success",
        data,
      })
    }
  })
})

module.exports = router
