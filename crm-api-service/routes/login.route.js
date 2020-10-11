const express = require("express")
const router = express.Router()
const Task = require("../models/Login.model");

router.post("/", async (req, res, next) => {
  const username = req.body.email
  const password = req.body.password
  const response = await Task(req.headers.database).validLogin(username, password);
  if (response.status === "Invalid") {
    res.status(200).json({ status: response.status, msg: "Username/Password invalid" })
  } else {
    res.status(200).json({ status: response.status, msg: "Success" })
  }
})

router.put("/", async (req, res, next) => {
  const response = await Task(req.headers.database).update(req.body);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

module.exports = router
