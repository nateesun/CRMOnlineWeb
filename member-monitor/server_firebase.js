const fetch = require("node-fetch")
const logger = require("./logger")

const Member = require("./controller/MemberController")
const TextUtil = require("./utils/TextUtil")
const config = require('./config/local-db.json')[0]

const timeToFetch = 30 * 1000
logger.info(`Wating update for ${timeToFetch / 1000} seconds`)
const apiUrlPull = `https://webdialy-online.firebaseio.com/member.json?access_token=${config.token}`
const apiUrlPush = `https://webdialy-online.firebaseio.com/member`
// logger.info(apiUrlPull)
// logger.info(apiUrlPush)

const pullArr = []

const pushDataToFirebase = (jsonArr, key) => {
  Member.find(
    jsonArr.code,
    (err, response) => {
      (async () => {
        const memberDb = response[0]
        if (memberDb) {
          if (
            jsonArr.pointBalance !== memberDb.Member_TotalScore ||
            jsonArr.pointRedemption !== memberDb.Member_TotalPurchase
          ) {
            logger.info(`found data match to update: ${jsonArr.username}`)
            const rawResponse = await fetch(
              `${apiUrlPush}/${key}.json?access_token=${config.token}`,
              {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  pointBalance: memberDb.Member_TotalScore,
                  pointRedemption: memberDb.Member_TotalPurchase,
                  statusActive: memberDb.Member_Active,
                  branchCode: memberDb.Member_BranchCode,
                  companyCode: memberDb.Member_Company,
                }),
              }
            ).catch((err) => {
              logger.error(`error push: ${err}`)
            })
            const content = await rawResponse.json()
            logger.info(content)
          } else {
            logger.info(`notfound data to update: ${jsonArr.username}`)
          }
        } else {
          logger.info("not found member:")
        }
      })()
    },
    (err, rows) => {
      if (err) {
        logger.error(`Find Member Error: ${err}`)
      } else {
        logger.info(rows)
      }
    }
  )
}

const updateDataFromFirebase = (jsonArr) => {
  Member.find(jsonArr.code, (err, response) => {
    logger.info("in find member")
    if (err) {
      logger.error(`Error find member: ${err}`)
    } else {
      if (response.length > 0) {
        logger.info(`member exist in db`)
        const fullName = `${TextUtil.convUnicode2Ascii(
          jsonArr.firstName
        )} ${TextUtil.convUnicode2Ascii(jsonArr.lastName)}`
        Member.updateMember(
          {
            Member_NameThai: fullName,
            Member_Mobile: jsonArr.mobile,
            Member_HomeTel: jsonArr.mobile,
            Member_TotalScore: jsonArr.pointBalance,
            Member_TitleNameThai: TextUtil.convUnicode2Ascii(
              jsonArr.prefix
            ),
            Member_ExpiredDate:
              jsonArr.memberExpiredDate || "2020-01-01",
            Member_PointExpiredDate:
              jsonArr.pointExpired || "2020-01-01",
            Member_Brithday: jsonArr.dateOfBirth || "2020-01-01",
          },
          (err, rows) => {
            if (err) {
              logger.error(`Update error: ${err}`)
            } else {
              logger.info(`Update success: ${rows}`)
            }
          }
        )
      } else {
        logger.info("create new member")
        const fullName = `${TextUtil.convUnicode2Ascii(
          jsonArr.firstName
        )} ${TextUtil.convUnicode2Ascii(jsonArr.lastName)}`
        Member.addMember(
          {
            Member_Code: jsonArr.code,
            Member_NameThai: fullName,
            Member_Mobile: jsonArr.mobile,
            Member_HomeTel: jsonArr.mobile,
            Member_TotalScore: jsonArr.pointBalance,
            Member_TitleNameThai: TextUtil.convUnicode2Ascii(
              jsonArr.prefix
            ),
            Member_ExpiredDate:
              jsonArr.memberExpiredDate || "2020-01-01",
            Member_PointExpiredDate:
              jsonArr.pointExpired || "2020-01-01",
            Member_Brithday: jsonArr.dateOfBirth || "2020-01-01",
          },
          (err, rows) => {
            if (err) {
              logger.error(`Add error: ${err}`)
            } else {
              logger.info(`Add success: ${rows}`)
            }
          }
        )
      }
    }
  })
}

function monitor(running) {
  setTimeout(() => {
    if (running % 2 === 0) {
      pullArr.forEach((jsonObj) => {
        for (let key in jsonObj) {
          const jsonArr = jsonObj[key]
          pushDataToFirebase(jsonArr, key, running)
          monitor(running + 1)
        }
      })
      if(pullArr.length===0){
        logger.info("pullArr is 0 length")
        monitor(running + 1)
      }
    } else {
      logger.info(`try to pull`)
      pullArr.splice(0, pullArr.length)
      fetch(apiUrlPull)
        .then((res) => res.json())
        .then((jsonObj) => {
          if(!jsonObj.error) {
            pullArr.push(jsonObj)
            for (let key in jsonObj) {
              const jsonArr = jsonObj[key]
              updateDataFromFirebase(jsonArr)
            }
            logger.info(`go to monitor recusive`)
            monitor(running + 1)
          } else {
            logger.error(`error from pull : ${jsonObj.error}`)
          }
        })
        .catch((err) => {
          logger.error(`error pull: ${err}`)
          monitor(running + 1)
        })
    }
  }, timeToFetch)
}

monitor(1)
