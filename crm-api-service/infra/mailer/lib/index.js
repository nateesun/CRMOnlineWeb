const nodemailer = require("nodemailer")

module.exports = (args) => {
  const {
    logger = console,
    smtpHost,
    smtpPort,
    smtpSecureProtocol,
    smtpUser,
    smtpPassword,
    smtpSender,
  } = args
  const nodeMailerOptions = {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecureProtocol,
  }
  if (smtpUser && smtpPassword) {
    nodeMailerOptions.auth = {
      user: smtpUser,
      pass: smtpPassword,
    }
  }
  return {
    sendMail: ({ fileName, filePath, options }) => {
      const defaultOptions = {
        from: smtpSender,
        subject: "",
        html: "",
      }
      const transporter = nodemailer.createTransport(nodeMailerOptions)
      return new Promise((resolve, reject) =>
        transporter.sendMail(
          {
            ...defaultOptions,
            ...options,
            attachments: [
              {
                filename: fileName,
                path: filePath,
                encoding: "base64",
              },
            ],
          },
          (error, info) => {
            if (error) {
              logger.error(error)
              reject({ success: false, error })
            } else {
              if (info.response.match(/^250 /)) {
                resolve({ success: true, response: info.response })
              } else {
                reject({ success: false, error: info.response })
              }
            }
          }
        )
      )
    },
  }
}
