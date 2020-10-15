import React, { useState, useEffect } from "react"
import styled from "styled-components"
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

  const callApi = async () => {
    console.log("Call api service updater")
    return new Promise(async (resolve, reject) => {
      const response = await fetch("/ping")
        .then((response) => response.json())
        .catch((err) => {
          reject(err)
        })

        resolve(response)
    })
  }

  const handleApi = async () => {
    const response = await callApi().catch(err=>{
      setMessage("Failure to call API!: " + err)
    })
    if (response === "Success") {
      setMessage("Call API Success")
    } else {
      setMessage("Failure to call API!")
    }

    // reset count
    setCount(0)
  }

  useEffect(() => {
    const timerMonitor = setTimeout(async () => {
      setCount(count + 1)
      if (count === timeToSync) {
        await handleApi();
      }
    }, 1000)
    return () => clearTimeout(timerMonitor)
  })

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
        {message && <div>Status: {message}</div>}
      </header>
    </div>
  )
}

export default App
