import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
import config from '../config';
import * as Func from './AppFunc';

import logo from "./logo.svg"
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(null)

  const runingCounter = async () => {
    setCount((c) => c + 10)
    const resMember = await fetch(config.apiLocalMember)
    .then(res => res.json())
    .catch(err => console.log('Cannot get data from '+config.apiLocalMember));
    if (resMember) {
      // const data = resMember.data;
      console.log('member sync');
    }
    const resRedeem = await fetch(config.apiLocalRedeem)
    .then(res => res.json())
    .catch(err => console.log('Cannot get data from '+config.apiLocalRedeem));
    if (resRedeem) {
      // const data = resRedeem.data;
      console.log('redeem sync');
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
    Func.initLoadData();
    const socket = socketIOClient(config.apiServiceEndpoint)
    socket.on("create_redeem", async (data) => {
      const payload = JSON.parse(data)
      const response = await Func.saveRedeemLocal(payload)
      console.log(response);
      setMessage(`get redeem:${payload.redeem_code}`)
    })
    socket.on("create_member", async (data) => {
      const payload = JSON.parse(data)
      const response = await Func.saveMemberLocal(payload)
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
        <div>{Func.showTimer(count)}</div>
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
