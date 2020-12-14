const fetch = require('node-fetch');
const config = requireSrc('config');

const apiUpdateLineUserId = `${config.crmApiHost}/api/member/update_line_user_id`;
const apiGetPoint = `${config.crmApiHost}/api/member/line/:lineUserId`;

const handleRequest = async (url, method, data) => {
  const newHeaders = {
    "Content-Type": "application/json",
    "database": config.database,
    "Authorization": config.basicAuth,
  };
  const newBody = data || {};
  const newMethod = method || 'GET';
  try {
    let response;
    if(method!=='GET'){
      response = await fetch(url, {
        method: newMethod,
        headers: newHeaders,
        body: JSON.stringify(newBody),
        redirect: 'follow',
      });
    }else{
      response = await fetch(url, {
        method: newMethod,
        headers: newHeaders,
        redirect: 'follow',
      });
    }
    const json = response.json();
    return json;
  } catch (error) {
    return error;
  }
}

const fetchRequest = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "database": config.database,
        "Authorization": config.basicAuth,
      }
    })
    const json = response.json();
    return json;
  } catch (error) {
    return error;
  }
}

const buttonsImageURL = 'https://picsum.photos/id/237/200/300';
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
        return client
          .getProfile(source.userId)
          .then(async (profile) => {
              const response = await handleRequest(apiUpdateLineUserId, 'PATCH', {
                email: 'nathee@gmail.com',
                lineUserId: source.userId,
              });
              if(response.status==='Success'){
                replyText(replyToken, [`${profile.displayName} ลงทะเบียนเรียบร้อยแล้ว`], client)
              }else{
                replyText(replyToken, [`${profile.displayName} ลงทะเบียนไม่สำเร็จ`], client)
              }
            }
          )
      }
    case "เรียกดูคะแนน":
      let data = {
        total_score: '0.00',
        total_purchase: '0.00'
      }
      if (source.userId) {
        (async ()=>{
          const response = await fetchRequest(apiGetPoint.replace(':lineUserId', source.userId));
          if(response.status==='Success'){
            data = response.data;
          }
          return client.replyMessage(replyToken, {
            type: "flex",
            altText: "Show Total Point",
            contents: {
              "type": "bubble",
              "direction": "rtl",
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "backgroundColor": "#276DDEFF",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "คะแนนสะสม (Point)",
                        "weight": "bold",
                        "size": "xl",
                        "color": "#F3F9F3FF",
                        "flex": 0,
                        "wrap": true,
                        "contents": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": ""+data.total_score,
                    "weight": "bold",
                    "size": "xl",
                    "color": "#F9E532FF",
                    "wrap": true,
                    "contents": []
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ยอดซื้อสินค้า (Purchase)",
                        "weight": "bold",
                        "color": "#FAFAFCFF",
                        "contents": []
                      },
                      {
                        "type": "text",
                        "text": ""+data.total_purchase,
                        "weight": "bold",
                        "color": "#FFF533FF",
                        "align": "start",
                        "margin": "xs",
                        "wrap": true,
                        "style": "normal",
                        "contents": []
                      }
                    ]
                  }
                ]
              }
            }
          })
        })()
      }
      break;
    case "โปรโมชั่น":
      return client.replyMessage(replyToken, {
        type: "flex",
        altText: "Test Template",
        contents: {
          "type": "carousel",
          "contents": [
            {
              "type": "bubble",
              "hero": {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Arm Chair, White",
                    "weight": "bold",
                    "size": "xl",
                    "wrap": true,
                    "contents": []
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "$49",
                        "weight": "bold",
                        "size": "xl",
                        "flex": 0,
                        "wrap": true,
                        "contents": []
                      },
                      {
                        "type": "text",
                        "text": ".99",
                        "weight": "bold",
                        "size": "sm",
                        "flex": 0,
                        "wrap": true,
                        "contents": []
                      }
                    ]
                  }
                ]
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Add to Cart",
                      "uri": "https://linecorp.com"
                    },
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Add to wishlist",
                      "uri": "https://linecorp.com"
                    }
                  }
                ]
              }
            },
            {
              "type": "bubble",
              "hero": {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Metal Desk Lamp",
                    "weight": "bold",
                    "size": "xl",
                    "wrap": true,
                    "contents": []
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "flex": 1,
                    "contents": [
                      {
                        "type": "text",
                        "text": "$11",
                        "weight": "bold",
                        "size": "xl",
                        "flex": 0,
                        "wrap": true,
                        "contents": []
                      },
                      {
                        "type": "text",
                        "text": ".99",
                        "weight": "bold",
                        "size": "sm",
                        "flex": 0,
                        "wrap": true,
                        "contents": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "Temporarily out of stock",
                    "size": "xxs",
                    "color": "#FF5551",
                    "flex": 0,
                    "margin": "md",
                    "wrap": true,
                    "contents": []
                  }
                ]
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Add to Cart",
                      "uri": "https://linecorp.com"
                    },
                    "flex": 2,
                    "color": "#AAAAAA",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Add to wish list",
                      "uri": "https://linecorp.com"
                    }
                  }
                ]
              }
            },
            {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "See more",
                      "uri": "https://linecorp.com"
                    },
                    "flex": 1,
                    "gravity": "center"
                  }
                ]
              }
            }
          ]
        }
      })
    case "buttons":
      return client.replyMessage(replyToken, {
        type: "template",
        altText: "Buttons alt text",
        template: {
          type: "buttons",
          thumbnailImageUrl: null,
          title: "My button sample",
          text: "Hello, my button",
          actions: [
            { label: "Go to line.me", type: "uri", uri: "https://line.me" },
            {
              label: "Say hello1",
              type: "postback",
              data: "hello こんにちは",
            },
            {
              label: "言 hello2",
              type: "postback",
              data: "hello こんにちは",
              text: "hello こんにちは",
            },
            { label: "Say message", type: "message", text: "Rice=米" },
          ],
        },
      })
    case "confirm":
      return client.replyMessage(replyToken, {
        type: "template",
        altText: "Confirm alt text",
        template: {
          type: "confirm",
          text: "Do it?",
          actions: [
            { label: "Yes", type: "message", text: "Yes!" },
            { label: "No", type: "message", text: "No!" },
          ],
        },
      })
    case "carousel":
      return client.replyMessage(replyToken, {
        type: "template",
        altText: "Carousel alt text",
        template: {
          type: "carousel",
          columns: [
            {
              thumbnailImageUrl: null,
              title: "hoge",
              text: "fuga",
              actions: [
                {
                  label: "Go to line.me",
                  type: "uri",
                  uri: "https://line.me",
                },
                {
                  label: "Say hello1",
                  type: "postback",
                  data: "hello こんにちは",
                },
              ],
            },
            {
              thumbnailImageUrl: null,
              title: "hoge",
              text: "fuga",
              actions: [
                {
                  label: "言 hello2",
                  type: "postback",
                  data: "hello こんにちは",
                  text: "hello こんにちは",
                },
                { label: "Say message", type: "message", text: "Rice=米" },
              ],
            },
          ],
        },
      })
    case "image carousel":
      return client.replyMessage(replyToken, {
        type: "template",
        altText: "Image carousel alt text",
        template: {
          type: "image_carousel",
          columns: [
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "Go to LINE",
                type: "uri",
                uri: "https://line.me",
              },
            },
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "Say hello1",
                type: "postback",
                data: "hello こんにちは",
              },
            },
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "Say message",
                type: "message",
                text: "Rice=米",
              },
            },
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "datetime",
                type: "datetimepicker",
                data: "DATETIME",
                mode: "datetime",
              },
            },
          ],
        },
      })
    case "datetime":
      return client.replyMessage(replyToken, {
        type: "template",
        altText: "Datetime pickers alt text",
        template: {
          type: "buttons",
          text: "Select date / time !",
          actions: [
            {
              type: "datetimepicker",
              label: "date",
              data: "DATE",
              mode: "date",
            },
            {
              type: "datetimepicker",
              label: "time",
              data: "TIME",
              mode: "time",
            },
            {
              type: "datetimepicker",
              label: "datetime",
              data: "DATETIME",
              mode: "datetime",
            },
          ],
        },
      })
    case "imagemap":
      return client.replyMessage(replyToken, {
        type: "imagemap",
        baseUrl: `${baseURL}/static/rich`,
        altText: "Imagemap alt text",
        baseSize: { width: 1040, height: 1040 },
        actions: [
          {
            area: { x: 0, y: 0, width: 520, height: 520 },
            type: "uri",
            linkUri: "https://store.line.me/family/manga/en",
          },
          {
            area: { x: 520, y: 0, width: 520, height: 520 },
            type: "uri",
            linkUri: "https://store.line.me/family/music/en",
          },
          {
            area: { x: 0, y: 520, width: 520, height: 520 },
            type: "uri",
            linkUri: "https://store.line.me/family/play/en",
          },
          {
            area: { x: 520, y: 520, width: 520, height: 520 },
            type: "message",
            text: "URANAI!",
          },
        ],
        video: {
          originalContentUrl: `${baseURL}/static/imagemap/video.mp4`,
          previewImageUrl: `${baseURL}/static/imagemap/preview.jpg`,
          area: {
            x: 280,
            y: 385,
            width: 480,
            height: 270,
          },
          externalLink: {
            linkUri: "https://line.me",
            label: "LINE",
          },
        },
      })
    case "bye":
      switch (source.type) {
        case "user":
          return replyText(replyToken, "Bot can't leave from 1:1 chat", client)
        case "group":
          return replyText(replyToken, "Leaving group", client).then(() =>
            client.leaveGroup(source.groupId)
          )
        case "room":
          return replyText(replyToken, "Leaving room", client).then(() =>
            client.leaveRoom(source.roomId)
          )
      }
    default:
      console.log(`Echo message to ${replyToken}: ${message.text}`)
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
    if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
      return console.log("Test hook recieved: " + JSON.stringify(event.message))
    }

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
