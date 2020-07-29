import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { CookiesProvider } from "react-cookie"
import { ThemeProvider } from "styled-components"

import App from "containers/App"
import history from "./utils/history"
import configureStore from "./configureStore"
import * as serviceWorker from "./serviceWorker"

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById("root")

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <ThemeProvider theme={{ "$bg-color": "#123456" }}>
    <CookiesProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </CookiesProvider>
  </ThemeProvider>,
  MOUNT_NODE
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
