import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useCookies } from 'react-cookie'
import { FormattedMessage } from "react-intl"
import messages from "./messages"

import { checkLogout } from "containers/Login/actions"

export default function UserPanel(props) {
  const dispath = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie, removeCookie] = useCookies(['loggedIn'])
  const { profile } = props
  const sexLogo = profile && (profile.prefix ==='นาย' || profile.prefix === 'ดช.') ? 'avatar1.png': 'avatar2.png'

  const onCheckLogout = () => {
    removeCookie('loggedIn')
    removeCookie('token')
    dispath(checkLogout())
  }
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img
          src={`dist/img/${sexLogo}`}
          className="img-circle elevation-2"
          alt="User Images"
        />
      </div>
      <div className="info">
        <span className="d-block" style={{color: "white"}}>
          {profile && <span>{profile.firstName} {profile.lastName}</span>}
        </span>
        <Link to="/" style={{ fontSize: "12px", color: "orange" }} onClick={()=>onCheckLogout()}>
          <b>
            <FormattedMessage {...messages.logout} />
          </b>
        </Link>
      </div>
    </div>
  )
}
