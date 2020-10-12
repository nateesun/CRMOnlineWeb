const express = require("express")
const router = express.Router()
const Task = require("../models/ValidateSlip")

module.exports = (args) => {
  const { imagePath } = args

  router.post("/", async (req, res, next) => {
    const { img_file } = req.body
    try {
      const response = await Task.validateImage(imagePath + "/" + img_file)
      if (response) {
        res
          .status(200)
          .json({ status: "Success", msg: "Validate success", data: response })
      } else {
        res
          .status(200)
          .json({ status: "Notfound", msg: "Not found data", data: "" })
      }
    } catch (err) {
      res
        .status(500)
        .json({ status: "Error", msg: "Validate image error: " + err })
    }
  })

  return router
}
