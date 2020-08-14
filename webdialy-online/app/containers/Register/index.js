/**
 *
 * Register
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeRegisterStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import RegisterForm from './RegisterForm';
import { addRegisterMember } from "./actions"

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
});

function mapDispatchToProps(dispatch) {
  return {
    onRegisterMember: (member) => dispatch(addRegisterMember(member)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);
