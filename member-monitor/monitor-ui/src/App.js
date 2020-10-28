import React, { useState, useEffect } from "react"
import styled from "styled-components"
import socketIOClient from "socket.io-client"
import config from './config';

import logo from "./logo.svg"
import "./App.css"

const BoxContain = styled.span`
  font-weight: bold;
  padding: 10px;
  border: 3px solid #bbb;
  margin: 5px;
  font-size: 28px;
`
const BoxMinutes = styled(BoxContain)`
  color: yellow;
`
const BoxSeconds = styled(BoxContain)`
  color: red;
`
const WrapperTime = (props) => {
  return (
    <React.Fragment>
      <BoxMinutes>{props.minute}</BoxMinutes>:
      <BoxSeconds>{props.second}</BoxSeconds>
    </React.Fragment>
  )
}

const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(null)

  const showTimer = (count) => {
    let minutes, seconds
    minutes = parseInt(count / 60, 10)
    seconds = parseInt(count % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return <WrapperTime minute={minutes} second={seconds} />
  }

  const saveRedeemLocal = async (payload) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("http://localhost:5050/api/redeem", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(payload),
      }).catch((err) => {
        reject(err)
      })
      resolve(response)
    })
  }

  const saveMemberLocal = async (payload) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("http://localhost:5050/api/member", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(payload),
      }).catch((err) => {
        reject(err)
      })
      resolve(response)
    })
  }

  const runingCounter = async () => {
    setCount((c) => c + 10)
    const response = await fetch('http://localhost:5050/api/member')
    .then(res => res.json())
    .catch(err => console.log('Cannot get data from /api/member'));
    if (response) {
      const data = response.data;
      console.log(data);
    }
  }

  const handleApi = () => {
    const response = "Success" // wait for dev

    if (response === "Success") {
      setMessage("Call API Success")
    } else {
      setMessage("Failure to call API!")
    }

    // reset count
    setCount(0)
  }

  useEffect(() => {
    console.log("app ui init")
    const socket = socketIOClient(config.END_POINT)
    socket.on("create_redeem", async (data) => {
      const payload = JSON.parse(data)
      const response = await saveRedeemLocal(payload)
      console.log(response);
      setMessage(`get redeem:${payload.redeem_code}`)
    })
    socket.on("create_member", async (data) => {
      const payload = JSON.parse(data)
      const response = await saveMemberLocal(payload)
      console.log(response);
      setMessage(`get member:${payload.code}`)
    })

    setInterval(() => {
      runingCounter()
    }, 10000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ marginBottom: "20px", color: "chocolate" }}>
          Time To Refresh
        </div>
        <div>{showTimer(count)}</div>
        <div className="DivButton">
          <button onClick={() => handleApi()} className="Button">
            Refresh Sync API Service<br />
            {config.END_POINT}
          </button>
        </div>
        {message && <div>{message}</div>}
      </header>
    </div>
  )
}

export default App
