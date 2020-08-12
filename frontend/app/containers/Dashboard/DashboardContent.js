import React from "react"
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'

import Header from "components/header"
import Menu from "components/menu"
import Footer from "components/footer"
import Content from "components/content"
import Control from "components/control"
import { loadProfileFromToken } from "../Login/actions"
const jwt = require('jsonwebtoken');

export default function DashboardContent(props) {
  const { profile } = props
  const dispatch = useDispatch()
  const [cookies] = useCookies(['profile'])
  if(!profile){
    const token = jwt.verify(cookies.token, 'softpos').profile
    dispatch(loadProfileFromToken(token))
  }

  return (
    <div className="wrapper">
      <Header {...props} />
      <Menu {...props} />
      <Content {...props} />
      <Control {...props} />
      <Footer {...props} />
    </div>
  )
}
