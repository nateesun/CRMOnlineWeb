import React from "react"

export default function SearchForm() {
  return (
    <div className="input-group input-group-sm">
      <input
        className="form-control form-control-navbar"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  )
}
