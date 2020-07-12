import React from "react"

import Header from "../../components/header"
import Menu from "../../components/menu"
import Footer from "../../components/footer"
import Content from "../../components/content"
import Control from "../../components/control"

export default function DashboardContent() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Content />
      <Control />
      <Footer />
    </div>
  )
}
