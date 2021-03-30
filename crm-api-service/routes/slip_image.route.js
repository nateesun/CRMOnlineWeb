const express = require("express")
const router = express.Router()
const Task = require("../models/ValidateSlip")

var url = require('url');

function getUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
  });
}

module.exports = args => {
  
  router.post("/", async (req, res, next) => {
    const { img_file } = req.body
    const url = getUrl(req).replace(req.get('host').split(':')[1], process.env.API_PORT || "5000");
    try {
      const response = await Task.validateImage(url + "/images/" + img_file)
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
