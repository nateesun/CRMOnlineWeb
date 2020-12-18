const config = requireSrc("config")
const { getFlexPoint, getFlexItemPromotion, gertFlexRedeemQrCode } = require('./flex_ui');
const { getRequestApi } = require('./handleRequest');

const apiGetPoint = `${config.crmApiHost}/api/member/line/:lineUserId`
const apiGetPromotions = `${config.crmApiHost}/api/promotion`

const handleText = (message, replyToken, source, client) => {
  switch (message.text) {
    case "profile":
      if (source.userId) {
        return client
          .getProfile(source.userId)
          .then((profile) =>
            replyText(
              replyToken,
              [
                `Display name: ${profile.displayName}`,
                `Status message: ${profile.statusMessage}`,
              ],
              client
            )
          )
      } else {
        return replyText(
          replyToken,
          "Bot can't use profile API without user ID",
          client
        )
      }
    case "ลงทะเบียนรับข้อมูล":
      if (source.userId) {
        return client.getProfile(source.userId).then(async (profile) => {
          const convUserId = Buffer.from(source.userId).toString('base64');
          replyText(
            replyToken,
            [`"ใช้ ข้อมูลด้านล่างนี้อัพเดตในระบบ web daily online"\n------------------------------\n${convUserId}\n------------------------------`],
            client
          )
        })
      }
    case "เรียกดูคะแนน":
      let data = {
        total_score: "0.00",
        total_purchase: "0.00",
      }
      if (source.userId) {
        (async () => {
          const convUserId = Buffer.from(source.userId).toString('base64');
          const response = await getRequestApi(
            apiGetPoint.replace(":lineUserId", convUserId)
          )
          if (response.status === "Success") {
            data = response.data
          }
          return client.replyMessage(replyToken, getFlexPoint(data))
        })()
      }
      break
    case "โปรโมชั่น":
      const promotions = [];
      (async () => {
        const response = await getRequestApi(apiGetPromotions);
        if (response.status === "Success") {
          const data = response.data
          for (let i = 0; i < data.length; i++) {
            const promotion = data[i]
            promotions.push(getFlexItemPromotion(promotion));
          }
        }
        return client.replyMessage(replyToken, {
          type: "flex",
          altText: "Test Template",
          contents: {
            type: "carousel",
            contents: promotions,
          },
        })
      })()
      break
    case "กดรับสิทธิ์":
      return client.replyMessage(replyToken, {
        type: "flex",
        altText: "Show qrcode",
        contents: gertFlexRedeemQrCode(''),
      })
    default:
      return replyText(replyToken, message.text, client)
  }
}

const replyText = (token, texts, client) => {
  texts = Array.isArray(texts) ? texts : [texts]
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: "text", text }))
  )
}

module.exports = (client) => {
  const module = {}

  module.handleEvent = (event) => {
    switch (event.type) {
      case "message":
        const message = event.message
        switch (message.type) {
          case "text":
            return handleText(message, event.replyToken, event.source, client)
          default:
            throw new Error(`Unknown message: ${JSON.stringify(message)}`)
        }
      default:
        throw new Error(`Unknown event: ${JSON.stringify(event)}`)
    }
  }

  return module
}
