/* Code make from generation */

const express = require("express")
const router = express.Router()
const Task = require("../models/TableCRUD.model")

router.get("/", async (req, res, next) => {
  const response = await Task(req.headers.database).findAll();
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.post("/search", async (req, res, next) => {
  const { key, value } = req.body;
  const response = await Task(req.headers.database).searchData(key, value);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.get("/:id", async (req, res, next) => {
  const response = await Task(req.headers.database).findById(req.params.id);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.post("/", async (req, res, next) => {
  const response = await Task(req.headers.database).create(req.body);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.put("/", async (req, res, next) => {
  const response = await Task(req.headers.database).update(req.body);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.delete("/:id", async (req, res, next) => {
  const response = await Task(req.headers.database).delete(req.params.id);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

module.exports = router
