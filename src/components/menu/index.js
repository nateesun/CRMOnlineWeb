import React from "react"

import BrandLogo from "./BrandLogo"
import UserPanel from "./UserPanel"
import MenuTabs from "./MenuTabs"

export default function Menu(props) {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <BrandLogo />
      <div className="sidebar">
        <UserPanel {...props} />
        <MenuTabs {...props} />
      </div>
    </aside>
  )
}
