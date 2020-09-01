const express = require("express")
const router = express.Router()
const Task = require("../models/TableCRUD")

router.post("/:tableName", (req, res, next) => {
  const { tableName } = req.params
  Task.create(req.body, tableName)
  res.json({ status: "success" })
})

module.exports = router
