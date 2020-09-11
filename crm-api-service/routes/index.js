const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).render("index", { title: "API CRM Online" })
})

router.get("/version", (req, res) => {
  res.status(200).send({ type: "SUCCESS", message: "1.0.0" })
})

module.exports = router
