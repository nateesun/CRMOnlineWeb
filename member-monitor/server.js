const fetch = require("node-fetch")
const moment = require("moment")

const Member = require("./controller/MemberController")

const timeToFetch = 60 * 1000
const apiUrlPull = "https://webdialy-online.firebaseio.com/member.json"
const apiUrlPush = "https://webdialy-online.firebaseio.com/member"

function monitor(running) {
  if (timeToFetch < 4000) {
    console.error("Time to fetch must more 10 second")
  } else {
    setTimeout(() => {
      if (running % 2 === 0) {
        fetch(apiUrlPull)
        .then((res) => res.json())
        .then((jsonObj) => {
          for (let key in jsonObj) {
            const jsonArr = jsonObj[key]
            Member.find(jsonArr.code, (err, response) => {
              (async () => {
                const memberDb = response[0]
                const rawResponse = await fetch(apiUrlPush+'/'+key+'.json', {
                  method: "PATCH",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    "pointBalance": memberDb.Member_TotalScore
                    })
                })
                const content = await rawResponse.json();
                console.log(content);
                monitor(running + 1)
              })()
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        console.log("try to pull :", running)
        fetch(apiUrlPull)
          .then((res) => res.json())
          .then((jsonObj) => {
            console.log("in fetch")
            for (let key in jsonObj) {
              const jsonArr = jsonObj[key]
              Member.find(jsonArr.code, (err, response) => {
                console.log("in find member")
                if (err) throw err
                if (response.length > 0) {
                  console.log("member exist in db")
                  console.log('Not update')
                } else {
                  console.log("create new member")
                  Member.addMember({
                    Member_Code: jsonArr.code,
                    Member_NameThai: jsonArr.fullName,
                    Member_Mobile: jsonArr.mobile,
                    Member_TotalScore: jsonArr.pointBalance,
                    Member_TitleNameThai: jsonArr.prefix,
                    Member_ExpiredDate: moment()
                      .add(1, "years")
                      .format("YYYY-MM-DD"),
                    Member_AppliedDate: moment().format("YYYY-MM-DD"),
                    Member_PointExpiredDate: moment()
                      .add(1, "years")
                      .format("YYYY-MM-DD"),
                  })
                }
              })
            }
            console.log("go to monitor recusive")
            monitor(running + 1)
          })
          .catch((err) => {
            console.log("error:", err)
          })
      }
    }, timeToFetch)
  }
}

monitor(1)

// const jsonObj = {
//   "-MCCkh9UA1SXksKImphC": {
//     code: "00000",
//     created: "14/07/2020 21:38:00",
//     dateOfBirth: "",
//     fullName: "นที สังข์ทองงาม",
//     mobile: "0864108403",
//     password: "000000",
//     pointBalance: 123,
//     pointExpired: "",
//     pointRedemption: 0,
//     prefix: "นาย",
//     rewardRedemption: 0,
//     updated: "14/07/2020 21:38:00",
//     username: "natee@gmail.com",
//   },
// }
// for (let i in jsonObj) {
//   const jsonArr = jsonObj[i]
//   console.log("code: ", jsonArr.code)
//   Member.find(jsonArr.code, (err, response) => {
//     if (response[0]) {
//       console.log(response[0].Member_Code)
//     } else {
//       console.log("create new member")
//     }
//   })
// }

// console.log(moment().add(1, 'years').format('YYYY-MM-DD'))
