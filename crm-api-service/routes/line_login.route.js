const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()
const Task = require("../models/Login.model")

router.get("/:line_id", async (req, res, next) => {
  try {
    const lineId = req.params.line_id
    const response = await Task(req.headers.database).getLineId(lineId);
    if (response.status === "Not Found") {
      res.status(404).json({ status: "Not Found" })
    } else {
      const token = jwt.sign({ lineId }, "softpos2013", { expiresIn: 60 * 60 })
      res.status(200).json({ status: "Success", token })
    }
  } catch (error) {
    return res.status(500).json({ status: 'Internal Server Error', msg: error.sqlMessage })
  }
})

module.exports = router
