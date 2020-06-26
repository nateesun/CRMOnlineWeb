import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Dashboard from "../Dashboard"
import Login from "../Login"
import Register from "../Register"
import ForgotPassword from "../ForgotPassword"
import RecoverPassword from "../RecoverPassword"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/recover-password" component={RecoverPassword} />
      </Switch>
    </Router>
  )
}

export default App
