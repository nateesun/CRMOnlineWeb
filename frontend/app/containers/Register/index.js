import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import RegisterForm from "./RegisterForm"
import { addRegisterMember } from "./actions"

import reducer from './reducer'
import saga from './saga'
import { makeRegisterStatus } from './selectors'
import { Redirect } from "react-router-dom"

const key = 'register'

const Register = props => {
  const { onRegisterMember, status} = props

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (status === 'Success') {
    alert("ทำการบันทึกข้อมูลเรียบร้อย")
    return <Redirect to push="/login" />
  } else {
    return <RegisterForm {...props} onRegister={onRegisterMember} />
  }
}

const mapStateToProps = state => {
  return {
    status: makeRegisterStatus(),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegisterMember: member => dispatch(addRegisterMember(member))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(Register)
