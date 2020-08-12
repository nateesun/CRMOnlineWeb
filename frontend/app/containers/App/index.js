import React, { useEffect } from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Dashboard from "../Dashboard"
import Login from "../Login"
import Register from "../Register"
import ForgotPassword from "../ForgotPassword"
import RecoverPassword from "../RecoverPassword"
import Profile from "../Profile"

const App = (props) => {
  useEffect(() => {
    return () => {
      console.log("App cleanup")
    }
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/recover-password" component={RecoverPassword} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}

export default App
