const config = requireSrc("config")
const apiGetQrCodeImages = `${config.crmApiHost}/api/qrcode/1112`

const gertFlexRedeemQrCode = (data) => {
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      spacing: "md",
      contents: [
        {
          type: "text",
          text: "ตัวอย่างโปรโมชั่น",
          weight: "bold",
          size: "xl",
          align: "center",
          gravity: "center",
          wrap: true,
          contents: [],
        },
        {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          margin: "lg",
          contents: [
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Date",
                  size: "sm",
                  color: "#AAAAAA",
                  flex: 1,
                  contents: [],
                },
                {
                  type: "text",
                  text: "20/12/2020 12.00PM",
                  size: "sm",
                  color: "#666666",
                  flex: 4,
                  wrap: true,
                  contents: [],
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Expired",
                  size: "sm",
                  color: "#AAAAAA",
                  flex: 1,
                  contents: [],
                },
                {
                  type: "text",
                  text: "20/02/2021 12.00PM",
                  size: "sm",
                  color: "#666666",
                  flex: 4,
                  wrap: true,
                  contents: [],
                },
              ],
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          margin: "xxl",
          contents: [
            {
              type: "spacer",
            },
            {
              type: "image",
              url: `${apiGetQrCodeImages}`,
              size: "xl",
              aspectMode: "cover",
            },
            {
              type: "text",
              text: "แสกน QR-Code นี้เพื่อรับสิทธิ์",
              size: "xs",
              color: "#AAAAAA",
              align: "center",
              margin: "xxl",
              wrap: true,
              contents: [],
            },
          ],
        },
      ],
    },
  }
}

const getFlexItemPromotion = (promotion) => {
  return {
    type: "bubble",
    hero: {
      type: "image",
      url: `${config.crmApiHost}${promotion.img_path||'images/noImage.jpg'}`,
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
    },
    body: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "text",
          text: `${promotion.redeem_name}`,
          weight: "bold",
          size: "xl",
          wrap: true,
          contents: [],
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: `ใช้คะแนน ${promotion.point_to_redeem} คะแนน`,
              weight: "bold",
              size: "xl",
              flex: 0,
              wrap: true,
              contents: [],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          action: {
            type: "postback",
            label: "กดรับสิทธิ์",
            text: "กดรับสิทธิ์",
            data: `${promotion.product_code}`
          },
          color: "#0D78F3FF",
          style: "primary",
        },
      ],
    },
  }
}

const getFlexPoint = (data) => {
  return {
    type: "flex",
    altText: "Show Total Point",
    contents: {
      type: "bubble",
      direction: "rtl",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        backgroundColor: "#276DDEFF",
        contents: [
          {
            type: "box",
            layout: "baseline",
            contents: [
              {
                type: "text",
                text: "คะแนนสะสม (Point)",
                weight: "bold",
                size: "xl",
                color: "#F3F9F3FF",
                flex: 0,
                align: "start",
                wrap: true,
                contents: [],
              },
            ],
          },
          {
            type: "text",
            text: "" + (data.total_score||'0.00'),
            weight: "bold",
            size: "xl",
            color: "#F9E532FF",
            align: "start",
            wrap: true,
            contents: [],
          },
          {
            type: "separator",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            contents: [
              {
                type: "text",
                text: "ยอดซื้อสินค้า (Purchase)",
                weight: "bold",
                color: "#FAFAFCFF",
                align: "start",
                contents: [],
              },
              {
                type: "text",
                text: "" + (data.total_purchase||'0.00'),
                weight: "bold",
                color: "#FFF533FF",
                align: "start",
                margin: "xs",
                wrap: true,
                style: "normal",
                contents: [],
              },
            ],
          },
        ],
      },
    },
  }
}

module.exports = {
  getFlexPoint,
  getFlexItemPromotion,
  gertFlexRedeemQrCode,
}
