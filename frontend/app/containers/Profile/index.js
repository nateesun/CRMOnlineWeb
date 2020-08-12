import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from "redux"

import { createStructuredSelector } from "reselect"
import { useInjectReducer } from "utils/injectReducer"
import { useInjectSaga } from "utils/injectSaga"

import reducer from "./reducer"
import saga from "./saga"

import ProfileDashboard from "./ProfileDashboard"

const Profile = (props) => {
  useInjectReducer({ key: "profile", reducer })
  useInjectSaga({ key: "profile", saga })

  return <ProfileDashboard {...props} />
}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = (dispatch) => {
  return {}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, memo)(Profile)
