import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { CookiesProvider } from "react-cookie"
import { ThemeProvider } from "styled-components"

import App from "containers/App"
import history from "./utils/history"
import configureStore from "./configureStore"

// Import Language Provider
import LanguageProvider from "containers/LanguageProvider"

// Import i18n messages
import { translationMessages } from "./i18n"

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById("root")

// store.subscribe(() => console.log(store.getState()))

const render = (messages) => {
  ReactDOM.render(
    <ThemeProvider theme={{ "$bg-color": "#123456" }}>
      <CookiesProvider>
        <Provider store={store}>
          <LanguageProvider messages={messages}>
            <App />
          </LanguageProvider>
        </Provider>
      </CookiesProvider>
    </ThemeProvider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./i18n", "containers/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import("intl"))
  })
    .then(() =>
      Promise.all([
        import("intl/locale-data/jsonp/en.js"),
        import("intl/locale-data/jsonp/de.js"),
      ])
    )
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err
    })
} else {
  render(translationMessages)
}

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install() // eslint-disable-line global-require
}
