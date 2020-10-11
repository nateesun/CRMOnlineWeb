/* MemberShipping.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/MemberShipping.model")

router.get("/", async (req, res, next) => {
  const response = await Task(req.headers.database).findAll();
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.post("/search", async (req, res, next) => {
  const { key, value } = req.body
  const response = await Task(req.headers.database).searchData(key, value);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.get("/:member_code", async (req, res, next) => {
  const member_code = req.params.member_code;
  const response = await Task(req.headers.database).findByMemberCode(member_code);
  const data = JSON.parse(response.data)
  res.status(200).json({ status: response.status, msg: "Success", data })
})

router.post("/", async (req, res, next) => {
  const { member_code } = req.body
  const response = await Task(req.headers.database).deleteByMemberCode(member_code);
  if (response === "Success") {
    const response2 = await Task(req.headers.database).create(req.body);
    res.status(200).json({ status: response2.status, msg: "Success", data: req.body })
  } else {
    res.status(500).json({ status: "Error", msg: 'Cannot create member_shipping' })
  }
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