const express = require("express")
const router = express.Router()
const Task = require("../models/Member.model")
const TaskLogin = require("../models/Login.model")
const moment = require("moment")

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
  const { key, value } = req.body;
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

router.get("/:email", (req, res, next) => {
  Task(req.headers.database).findByEmail(req.params.email, (err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      const respData = JSON.parse(response.data)
      res.status(200).json({
        status: response.status,
        msg: "Success",
        data: {
          ...respData[0],
          birthday: moment(new Date(respData[0].birthday)).format('YYYY-MM-DD'),
        },
      })
    }
  })
})

router.post("/", (req, res, next) => {
  const { 
    code, uuid_index, prefix, first_name, last_name, mobile, email, username, password,
    system_created, system_updated, total_score, total_purchase, point_expired_date, 
    expired_date, birthday, line_id
  } = req.body;
  const memberModel = {
    code, uuid_index, prefix, first_name, last_name, mobile, email,
    system_created, system_updated, total_score, total_purchase, point_expired_date, 
    expired_date, birthday, line_id
  }
  const loginModel = {
    username,
    password: Buffer.from(password).toString('base64'),
    member_active: 'Y'
  }
  Task(req.headers.database).create(memberModel, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      TaskLogin(req.headers.database).create(loginModel, (err1, response1) => {
        if (err1) {
          res1.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
        } else {
          const data = JSON.parse(response.data)
          res.status(200).json({
            status: response1.status,
            msg: "Success",
            data,
          })
        }
      })
    }
  })
})

router.put("/", (req, res, next) => {
  Task(req.headers.database).update(req.body, (err, response)=>{
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

router.post("/login", (req, res, next) => {
  const { token } = req.body
  Task(req.headers.database).verifyTokenLine(token, (err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      const { Username, Password } = JSON.parse(response.data)[0]
      res.status(200).json({
        status: "Success",
        data: {
          Username,
          Password,
        },
      })
    }
  })
})


module.exports = router
