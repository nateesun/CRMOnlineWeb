import React, { useState, useEffect } from "react"
import styled from "styled-components"
import socketIOClient from 'socket.io-client';

import logo from "./logo.svg"
import "./App.css"

const timeToSync = 60 * 60

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

const END_POINT = 'http://localhost:5000';

const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(null);

  const showTimer = (count) => {
    let minutes, seconds
    minutes = parseInt(count / 60, 10)
    seconds = parseInt(count % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return <WrapperTime minute={minutes} second={seconds} />
  }

  const saveRedeemLocal = async payload => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/api/redeem", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(payload)
      }).catch((err) => {
          reject(err)
        })
        resolve(response)
    })
  }

  const saveMemberLocal = async payload => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/api/member", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(payload)
      }).catch((err) => {
          reject(err)
        })
        resolve(response)
    })
  }

  const handleApi = async () => {
    const response = "Success"; // wait for dev

    if (response === "Success") {
      setMessage("Call API Success")
    } else {
      setMessage("Failure to call API!")
    }

    // reset count
    setCount(0)
  }

  useEffect(() => {
    const socket = socketIOClient(END_POINT);
    socket.on('create_redeem', async data => {
      const payload = JSON.parse(data);
      await saveRedeemLocal(payload);
      setMessage(`get redeem:${payload.redeem_code}`);
    })
    socket.on('create_member', async data => {
      const payload = JSON.parse(data);
      await saveMemberLocal(payload);
      setMessage(`get member:${payload.code}`);
    })
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
            Refresh Sync API Service
          </button>
        </div>
        {message && <div>{message}</div>}
      </header>
    </div>
  )
}

export default App
