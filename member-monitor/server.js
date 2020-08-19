const fetch = require("node-fetch")
const moment = require("moment")
const logger = require("./logger")

const Member = require("./controller/MemberController")
const TextUtil = require("./utils/TextUtil")
const config = require("./config/local-db.json")[0]

const timeToFetch = 10 * 1000
logger.info(`Wating update for ${timeToFetch / 1000} seconds`)

const apiUrlPull = `http://183.88.210.11:5000/api/member`
const apiUrlPush = `http://183.88.210.11:5000/api/member`

const pullArr = []

const pushDataToDatabase = async (jsonArr, key) => {
  Member.find(
    jsonArr.Member_Code,
    (err, response) => {
      (async () => {
        const memberDb = response[0]
        if (memberDb) {
          if (
            jsonArr.Member_TotalScore !== memberDb.Member_TotalScore ||
            jsonArr.Member_TotalPurchase !== memberDb.Member_TotalPurchase
          ) {
            logger.info(`found data match to update: ${jsonArr.Username}`)
            const rawResponse = await fetch(`${apiUrlPush}`, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Member_TotalScore: memberDb.Member_TotalScore,
                Member_TotalPurchase: memberDb.Member_TotalPurchase,
                Member_Active: memberDb.Member_Active,
                Member_BranchCode: memberDb.Member_BranchCode,
                Member_Code: memberDb.Member_Code,
                System_Updated: moment(memberDb.System_Updated).format('YYYY-MM-DD HH:mm:ss')
              }),
            }).catch((err) => {
              logger.error(`error push: ${err}`)
            })
            const content = await rawResponse.json()
            logger.info(content)
          } else {
            logger.info(`notfound data to update: ${jsonArr.Username}`)
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

const updateDataFromServer = async (jsonArr) => {
  Member.find(jsonArr.Member_Code, (err, response) => {
    logger.info("in find member")
    const fullName = `${TextUtil.convUnicode2Ascii(
      jsonArr.Member_FirstName
    )} ${TextUtil.convUnicode2Ascii(jsonArr.Member_LastName)}`
    const expiredDate =
      moment(jsonArr.Member_ExpiredDate).format("YYYY-MM-DD") || "2020-01-01"
    const pointExpiredDate =
      moment(jsonArr.Member_PointExpiredDate).format("YYYY-MM-DD") ||
      "2020-01-01"
    const birthDay =
      moment(jsonArr.Member_Brithday).format("YYYY-MM-DD") || "2020-01-01"
    const dataContent = {
      Member_Code: jsonArr.Member_Code,
      Member_NameThai: fullName,
      Member_Mobile: jsonArr.Member_Mobile,
      Member_HomeTel: jsonArr.Member_HomeTel,
      Member_TotalScore: jsonArr.Member_TotalScore,
      Member_TotalPurchase: jsonArr.Member_TotalPurchase,
      Member_TitleNameThai: TextUtil.convUnicode2Ascii(
        jsonArr.Member_TitleNameThai
      ),
      Member_ExpiredDate: expiredDate,
      Member_PointExpiredDate: pointExpiredDate,
      Member_Brithday: birthDay,
      System_Created: moment(jsonArr.System_Created).format('YYYY-MM-DD HH:mm:ss'),
      System_Updated: moment(jsonArr.System_Updated).format('YYYY-MM-DD HH:mm:ss')
    }

    if (err) {
      logger.error(`Error find member: ${err}`)
    } else {
      // found member in local db
      if (response.length > 0) {
        const memberDb = response[0]
        const SystemUpdatedDb = moment(memberDb.System_Updated).format('YYYY-MM-DD HH:mm:ss')
        if (SystemUpdatedDb !== dataContent.System_Updated) {
          logger.info(`member exist in db`)

          Member.updateMember(dataContent, (err, rows) => {
            if (err) {
              logger.error(`Update error: ${err}`)
            } else {
              logger.info(`Update success: ${rows}`)
            }
          }) // Member Update function
        } // condition to update
      } else {
        logger.info("create new member")
        Member.addMember(dataContent, (err, rows) => {
          if (err) {
            logger.error(`Add error: ${err}`)
          } else {
            logger.info(`Add success: ${rows}`)
          }
        })
      }
    }
  })
}

function monitor(running) {
  setTimeout(() => {
    if (running % 2 === 0) {
      (async ()=>{
        pullArr.forEach((jsonObj) => {
          for (let key in jsonObj) {
            const jsonArr = jsonObj[key]
            pushDataToDatabase(jsonArr, key)
          }
        })
        if (pullArr.length === 0) {
          logger.info("pullArr is 0 length")
        }
      })()
    } else {
      (async () => {
        logger.info(`try to pull`)
        const content = await fetch(apiUrlPull).then((res) => res.json())
        pullArr.splice(0, pullArr.length)
        pullArr.push(content)
        for (let key in content) {
          const jsonArr = content[key]
          await updateDataFromServer(jsonArr)
        }
      })()

      logger.info(`go to monitor recusive`)
    }

    monitor(running + 1)
  }, timeToFetch)
}

monitor(1)
