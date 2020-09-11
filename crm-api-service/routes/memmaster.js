const express = require("express")
const router = express.Router()
const moment = require('moment')
const Task = require("../models/MemMaster")

router.get("/", (req, res, next) => {
  Task.findAll((err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json(JSON.parse(response.data))
    }
  })
})

router.get("/:member_code", (req, res, next) => {
  const member_code = req.params.member_code
  Task.find(member_code, (err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      const data = JSON.parse(response.data)[0]
      const date1 = new Date(data.Member_Brithday);
      res.status(200).json({
        status: response.status,
        msg: "Success",
        data: {
          username: data.Username,
          prefix: data.Member_TitleNameThai,
          firstName: data.Member_FirstName,
          lastName: data.Member_LastName,
          pointBalance: data.Member_TotalScore,
          pointRedemption: data.Member_TotalPurchase,
          code: data.Member_Code,
          email: data.Member_Email,
          brithday: moment(new Date(data.Member_Brithday)).format('YYYY-MM-DD'),
          mobile: data.Member_Mobile,
          loggedIn: true,
          line_id: data.Line_Id,
        },
      })
    }
  })
})

/* GET employ listing. */
router.post("/login", (req, res, next) => {
  const username = req.body.email
  const password = req.body.password
  Task.validLogin(username, password, (err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      if (response.status === "Invalid") {
        res.status(200).json({
          status: response.status,
          msg: "Username/Password invalid",
        })
      } else {
        const data = JSON.parse(response.data)[0]
        res.status(200).json({
          status: response.status,
          msg: "Success",
          data: {
            username: data.Username,
            prefix: data.Member_TitleNameThai,
            firstName: data.Member_FirstName,
            lastName: data.Member_LastName,
            pointBalance: data.Member_TotalScore,
            pointRedemption: data.Member_TotalPurchase,
            code: data.Member_Code,
            email: data.Member_Email,
            brithday: data.Member_Brithday,
            mobile: data.Member_Mobile,
            loggedIn: true,
            lineId: data.Line_Id,
          },
        })
      }
    }
  })
})

router.post("/", (req, res, next) => {
  Task.create(req.body, (err, rows) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows.affectedRows })
    }
  })
})
router.put("/", (req, res, next) => {
  Task.updateProfile(req.body, (err, rows) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows.affectedRows })
    }
  })
})

router.patch("/", (req, res, next) => {
  Task.update(req.body, (err, rows) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows.affectedRows })
    }
  })
})

router.delete("/", (req, res, next) => {
  const { member_code } = req.body
  Task.delete(member_code, (err, rows) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows.affectedRows })
    }
  })
})

module.exports = router
