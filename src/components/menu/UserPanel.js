import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useCookies } from 'react-cookie'

import { checkLogout } from "../../containers/Login/actions"

export default function UserPanel(props) {
  const dispath = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie, removeCookie] = useCookies(['loggedIn'])

  const onCheckLogout = () => {
    removeCookie('loggedIn')
    removeCookie('token')
    dispath(checkLogout())
  }
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img
          src="dist/img/user2-160x160.jpg"
          className="img-circle elevation-2"
          alt="User Images"
        />
      </div>
      <div className="info">
        <span className="d-block" style={{color: "white"}}>
          {props.profile && props.profile.fullName}
        </span>
        <Link to="/" style={{ fontSize: "12px", color: "orange" }} onClick={()=>onCheckLogout()}>
          <b>Logout</b>
        </Link>
      </div>
    </div>
  )
}
