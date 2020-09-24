/**
 *
 * ProfileChangePwd
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import EditForm from './EditForm';
import * as selects from './selectors';

export function ProfileChangePwd(props) {
  useInjectReducer({ key: 'profileChangePwd', reducer });
  useInjectSaga({ key: 'profileChangePwd', saga });

  useEffect(() => {
    props.initLoad(props.login.email);
  }, [])

  return <EditForm {...props} />;
}

ProfileChangePwd.propTypes = {
  dispatch: PropTypes.func,
  clearData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: selects.makeSelectProfile(),
  updateStatus: selects.makeUpdateStatus(),
  errorUpdate: selects.makeErrorUpdate(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoad: email => dispatch(actions.initLoad(email)),
    onEditMember: member => dispatch(actions.updatePassword(member)),
    clearData: () => dispatch(actions.defaultAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileChangePwd);
