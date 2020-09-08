const express = require("express")
const router = express.Router()
const Task = require("../models/Stock")
const type = {
  SUCCESSS: 'Success'
}

router.post("/", async (req, res, next) => {
  try {
    const respo = await Task.create(req.body)
    res.json({ status: type.SUCCESSS, data: respo.data })
  } catch (err) {
    res.json({ type: err.type, message: err.message })
  }
})
router.put("/", async (req, res, next) => {
  try {
    const respo = await Task.update(req.body)
    res.json({ status: type.SUCCESSS, data: respo.data })
  } catch (err) {
    res.json({ type: err.type, message: err.message })
  }
})
router.delete("/:index_uuid", async (req, res, next) => {
  const { index_uuid } = req.params
  try {
    const row = await Task.delete(index_uuid)
    res.json({ status: type.SUCCESSS, message: `delete ${row.data} row(s)` })
  } catch (err) {
    res.json({ type: err.type, message: err.message })
  }
})
router.get("/", async (req, res, next) => {
  try {
    const respo = await Task.findAll()
    res.json({ status: type.SUCCESSS, data: respo })
  } catch (err) {
    res.json({ type: err.type, message: err.message })
  }
})
router.get("/:index_uuid", async (req, res, next) => {
  const { index_uuid } = req.params
  try {
    const respo = await Task.findById(index_uuid)
    res.json({ status: type.SUCCESSS, data: respo })
  } catch (err) {
    res.json({ type: err.type, message: err.message })
  }
})

module.exports = router
