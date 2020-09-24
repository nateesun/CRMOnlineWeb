const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()
const Task = require("../models/Login.model")

router.get("/:line_id", (req, res, next) => {
  const lineId = req.params.line_id
  Task.getLineId(lineId, (err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      if (response.status === "Not Found") {
        res.status(404).json({
          status: "Not Found",
        })
      } else {
        const token = jwt.sign({ lineId }, "softpos2013", {
          expiresIn: 60 * 60,
        })
        res.status(200).json({
          status: "Success",
          token,
        })
      }
    }
  })
})

module.exports = router
