import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useCookies } from 'react-cookie'

import { checkLogout } from "../../containers/Login/actions"

export default function UserPanel() {
  const dispath = useDispatch()
  const [cookie, setCookie, removeCookie] = useCookies(['loggedIn'])

  const onCheckLogout = () => {
    removeCookie('loggedIn')
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
          Administrator
        </span>
        <Link to="/login" style={{ fontSize: "12px", color: "orange" }} onClick={onCheckLogout}>
          <b>Logout</b>
        </Link>
      </div>
    </div>
  )
}
