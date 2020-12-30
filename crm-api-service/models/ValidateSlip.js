const logger = require('../logger');
const QrCode = require("qrcode-reader")
const Jimp = require("jimp")
const fs = require("fs")

module.exports = {
  validateImage: (imageFile) => {
    logger.debug("validateImage")
    return new Promise((resolve, reject) => {
      const qr = new QrCode()
      const buffer = fs.readFileSync(imageFile)
      Jimp.read(buffer, (err, image) => {
        if (err) {
          return reject({ status: "Error", msg: err.message })
        }
        const qr = new QrCode()
        qr.callback = (err, value) => {
          if (err) {
            logger.error(err);
            return reject({ status: "Error", msg: err.message })
          }
          resolve(value.result)
        }
        qr.decode(image.bitmap)
      })
    }) // end promise
  },
}
