const mailerjs = require("./lib/index")

module.exports = (args) => {
  const mailer = mailerjs(args)

  const recoverPassword = (functionArgs) =>
    new Promise(async (resolve, reject) => {
      try {
        const { password, recipients } = functionArgs
        if (!recipients) {
          throw new Error("Recipients is missing")
        }
        const subject = "[Web Dialy Online] Password Recovery"
        const dePassword = Buffer.from(password, 'base64').toString('utf-8');
        mailer
          .sendMail({
            options: {
              subject,
              to: recipients,
              html: `<p>Your new password is ${dePassword}</p>`,
            },
          })
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      } catch (e) {
        reject(e)
      }
    })

  return { recoverPassword }
}
