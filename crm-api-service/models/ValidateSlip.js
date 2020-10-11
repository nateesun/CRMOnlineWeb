const QrCode = require("qrcode-reader")
const Jimp = require("jimp")
const fs = require("fs")

module.exports = {
  validateImage: (imageFile) => {
    console.log("validateImage method start:")
    return new Promise((resolve, reject) => {
      const qr = new QrCode()
      const buffer = fs.readFileSync(imageFile)
      Jimp.read(buffer, (err, image) => {
        if (err) {
          return reject(err)
        }
        const qr = new QrCode()
        qr.callback = (err, value) => {
          if (err) {
            return reject(err)
          }
          return resolve(value.result)
        }
        qr.decode(image.bitmap)
      })
    }) // end promise
  },
}
