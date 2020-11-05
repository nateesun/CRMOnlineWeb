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
import { getCookie } from 'react-use-cookie';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import EditForm from './EditForm';
import * as selectors from './selectors';

export function ProfileEdit(props) {
  useInjectReducer({ key: 'profileEdit', reducer });
  useInjectSaga({ key: 'profileEdit', saga });

  useEffect(() => {
    const getToken = getCookie('token') || '';
    if (getToken !== '') {
      props.initLoad(JSON.parse(getToken));
    }
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
  profile: selectors.makeSelectProfile(),
  updateStatus: selectors.makeUpdateStatus(),
  errorUpdate: selectors.makeErrorUpdate(),
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
