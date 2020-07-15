import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect'
import { useCookies } from 'react-cookie'

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import DashboardContent from './DashboardContent'

import reducer from '../Login/reducer'
import saga from '../Login/saga'
import { makeLoggedIn } from "../Login/selectors";
import { useHistory } from "react-router-dom";

import { makeSelectProfile } from "../Login/selectors";
import { loadProfileFromToken } from '../Login/actions'

const Dashboard = props => {
  const [cookies] = useCookies(['loggedIn'])
  const history = useHistory()

  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  if (cookies.loggedIn !== 'Y') {
    history.push('/')
  }

  return (
    <DashboardContent {...props} />
  )
}

const mapStateToProps = createStructuredSelector({
  loggedIn: makeLoggedIn(),
  profile: makeSelectProfile(),
})

const mapDispatchToProps = dispatch => {
  return {
    onLoadProfileFromToken: token => {
      dispatch(loadProfileFromToken(token))
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(Dashboard)
