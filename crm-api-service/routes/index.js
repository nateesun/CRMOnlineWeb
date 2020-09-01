const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "API CRM Online" })
  next()
})

router.get("/version", (req, res, next) => {
  res.status(200).send({ type: "SUCCESS", message: "1.0.0" })
  next()
})

module.exports = router
