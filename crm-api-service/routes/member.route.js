const express = require("express")
const router = express.Router()
const Task = require("../models/Member.model")
const TaskLogin = require("../models/Login.model")
const moment = require("moment")

router.get("/", async (req, res, next) => {
  try {
    const response = await Task(req.headers.database).findAll()
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.post("/search", async (req, res, next) => {
  try {
    const { key, value } = req.body
    const response = await Task(req.headers.database).searchData(key, value)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.get("/:email", async (req, res, next) => {
  try {
    const email = req.params.email
    const response = await Task(req.headers.database).findByEmail(email)
    const respData = JSON.parse(response.data)
    res.status(200).json({
      status: response.status,
      msg: "Success",
      data: {
        ...respData[0],
        birthday: moment(new Date(respData[0].birthday)).format("YYYY-MM-DD"),
      },
    })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.post("/", async (req, res, next) => {
  try {
    const {
      code,
      uuid_index,
      prefix,
      first_name,
      last_name,
      mobile,
      email,
      username,
      password,
      system_created,
      system_updated,
      total_score,
      total_purchase,
      point_expired_date,
      expired_date,
      birthday,
      line_id,
    } = req.body
    const memberModel = {
      code,
      uuid_index,
      prefix,
      first_name,
      last_name,
      mobile,
      email,
      system_created,
      system_updated,
      total_score,
      total_purchase,
      point_expired_date,
      expired_date,
      birthday,
      line_id,
    }
    const loginModel = {
      username,
      password: Buffer.from(password).toString("base64"),
      member_active: "Y",
    }
    const response = await Task(req.headers.database).create(memberModel)
    const response1 = await TaskLogin(req.headers.database).create(loginModel)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response1.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const payload = {...req.body, uuid_index: req.params.id }
    const response = await Task(req.headers.database).update(payload)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.patch("/:id", async (req, res, next) => {
  try {
    const payload = {...req.body, uuid_index: req.params.id }
    const response = await Task(req.headers.database).updateRole(payload)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Task(req.headers.database).delete(req.params.id)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { token } = req.body
    const response = await Task(req.headers.database).verifyTokenLine(token)
    const { Username, Password } = JSON.parse(response.data)[0]
    res.status(200).json({
      status: "Success",
      data: {
        Username,
        Password,
      },
    })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

module.exports = router
