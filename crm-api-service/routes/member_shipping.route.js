/* MemberShipping.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/MemberShipping.model")

router.get("/", (req, res, next) => {
  Task(req.headers.database).findAll((err, response) => {
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

router.post("/search", (req, res, next) => {
  const { key, value } = req.body
  Task(req.headers.database).searchData(key, value, (err, response) => {
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

router.get("/:member_code", (req, res, next) => {
  Task(req.headers.database).findByMemberCode(
    req.params.member_code,
    (err, response) => {
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
    }
  )
})

router.post("/", async (req, res, next) => {
  const { member_code } = req.body
  const response = await Task(req.headers.database)
    .deleteByMemberCode(member_code)
    .catch((err) => {
      res.status(500).json({ status: "Error", msg: err })
    })
  if (response === "Success") {
    const responseCreate = await Task(req.headers.database)
      .create(req.body)
      .catch((err) => {
        res.status(500).json({ status: "Error", msg: err })
      })
    res.status(200).json({
      status: responseCreate.status,
      msg: "Success",
      data: req.body,
    })
  } else {
    res.status(500).json({ status: "Error", msg: 'Cannot create member_shipping' })
  }
})

router.put("/", (req, res, next) => {
  Task(req.headers.database).update(req.body, (err, response) => {
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

router.delete("/:id", (req, res, next) => {
  Task(req.headers.database).delete(req.params.id, (err, response) => {
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
