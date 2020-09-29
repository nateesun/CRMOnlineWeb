const express = require("express")
const router = express.Router()
const multer = require("multer")
const fs = require("fs")
const upload = multer({ dest: "./upload/" })

/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).render("index", { title: "API CRM Online" })
})

router.get("/version", (req, res) => {
  res.status(200).send({ type: "SUCCESS", message: "1.0.0" })
})

router.post("/upload", upload.single("file"), (req, res) => {
  const filename = req.file.filename
  const old_file = `./upload/${filename}`
  const new_file = `./public/images/${req.file.originalname}`

  fs.rename(old_file, new_file, function (err) {
    if (err) throw err
    console.log("File Renamed.")
  })

  res.status(200).send({
    status: "Success",
  })
})

module.exports = router
