/**
 *
 * ProfileEdit
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

export function ProfileEdit(props) {
  useInjectReducer({ key: 'profileEdit', reducer });
  useInjectSaga({ key: 'profileEdit', saga });

  useEffect(() => {
    props.initLoad(props.login.email);
  }, []);

  return <EditForm {...props} />;
}

ProfileEdit.propTypes = {
  dispatch: PropTypes.func,
  clearData: PropTypes.func,
  initLoad: PropTypes.func,
  login: PropTypes.object,
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
    onEditMember: member => dispatch(actions.editMember(member)),
    clearData: () => dispatch(actions.initState()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileEdit);
