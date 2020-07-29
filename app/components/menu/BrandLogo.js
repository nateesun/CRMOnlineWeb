import React from "react"
import { Link } from "react-router-dom"

export default function BrandLogo() {
  return (
    <Link to="/" className="brand-link">
      <img
        src="dist/img/AdminLTELogo.png"
        alt="WebDialy Online"
        className="brand-image img-circle elevation-3"
        style={{ opacity: ".8" }}
      />
      <span className="brand-text font-weight-light" data-widget="pushmenu">WebDialy Online</span>
    </Link>
  )
}
