/**
 *
 * Register
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeErrorRegister,
  makeSelectMember,
  makeRegisterStatus,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import RegisterForm from './RegisterForm';
import * as actions from './actions';

export function Register(props) {
  useInjectReducer({ key: 'register', reducer });
  useInjectSaga({ key: 'register', saga });

  const { onRegisterMember } = props;

  return (
    <div>
      <RegisterForm {...props} onRegister={onRegisterMember} />
    </div>
  );
}

Register.propTypes = {
  dispatch: PropTypes.func,
  onRegisterMember: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  member: makeSelectMember(),
  registerStatus: makeRegisterStatus(),
  errorRegister: makeErrorRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRegisterMember: member => dispatch(actions.addRegisterMember(member)),
    clearData: () => dispatch(actions.initState()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);
