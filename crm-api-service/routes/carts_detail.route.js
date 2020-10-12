/* CartsDetail.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/CartsDetail.model")
const CartsTask = require("../models/Carts.model")

router.get("/", async (req, res, next) => {
  try {
    const response = Task(req.headers.database).findAll()
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
    const response = Task(req.headers.database).searchData(key, value)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const response = Task(req.headers.database).findById(req.params.id)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.post("/", async (req, res, next) => {
  try {
    const response = Task(req.headers.database).create(req.body)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.put("/", async (req, res, next) => {
  try {
    const response = Task(req.headers.database).update(req.body)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.patch("/", async (req, res, next) => {
  try {
    const response = Task(req.headers.database).updateQty(req.body)
    await CartsTask(req.headers.database).updateSummary({
      cart_no: req.body.cart_no,
    })
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.delete("/", async (req, res, next) => {
  try {
    const response = Task(req.headers.database).delete(req.body)
    await CartsTask(req.headers.database).updateSummary({
      cart_no: req.body.cart_no,
    })
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

module.exports = router
