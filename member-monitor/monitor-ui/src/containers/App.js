import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
import * as Func from './AppFunc';

import logo from "./logo.svg"
import "./App.css"

const apiServiceEndpoint = 'http://softcrmpkh.dyndns.org:5000';

const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(null)

  const runingCounter = async () => {
    setCount((c) => c + 10)
    const uploadMemberResponse = await Func.uploadMember().catch(err=>console.log('Error:', err));
    console.log(uploadMemberResponse);
    const uploadRedeemResponse = await Func.uploadRedeem().catch(err=>console.log('Error:', err));
    console.log(uploadRedeemResponse);
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
    Func.initLoadData();
    const socket = socketIOClient(apiServiceEndpoint)
    socket.on("create_redeem", async (data) => {
      const payload = JSON.parse(data)
      await Func.saveRedeemLocal(payload)
      setMessage(`get redeem:${payload.redeem_code}`)
    })
    socket.on("create_member", async (data) => {
      const payload = JSON.parse(data)
      await Func.saveMemberLocal(payload)
      setMessage(`get member:${payload.code}`)
    })
    socket.on('error', ()=>{
      console.log('socket connection error')
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
            {apiServiceEndpoint}
          </button>
        </div>
        {message && <div>{message}</div>}
      </header>
    </div>
  )
}

export default App
