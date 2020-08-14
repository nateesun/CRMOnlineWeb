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
import { defaultAction, addRegisterMember } from './actions';

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
    onRegisterMember: member => dispatch(addRegisterMember(member)),
    clearData: () => dispatch(defaultAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);
