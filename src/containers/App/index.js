import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from 'history'

import Dashboard from "../Dashboard"
import Login from "../Login"
import Register from "../Register"
import ForgotPassword from "../ForgotPassword"
import RecoverPassword from "../RecoverPassword"

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/recover-password" component={RecoverPassword} />
      </Switch>
    </Router>
  )
}

export default App
