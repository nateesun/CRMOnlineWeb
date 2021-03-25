/**
 *
 * ProfileChangePwd
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCookie } from 'react-use-cookie';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as appConstants from 'containers/App/constants';
import { makeSelectLogin } from 'containers/Login/selectors';
import MainLayout from 'components/MainLayout';
import SubMenu from 'components/SubMenu';
import * as appSelectors from 'containers/App/selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import EditForm from './EditForm';
import * as selectors from './selectors';

export function ProfileChangePwd(props) {
  useInjectReducer({ key: 'profileChangePwd', reducer });
  useInjectSaga({ key: 'profileChangePwd', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  useEffect(() => {
    if (token) {
      props.initLoad(JSON.parse(token));
    }
  }, []);

  return (
    <MainLayout title='Change Password' {...props}>
      <SubMenu {...props} />
      <EditForm {...props} />
    </MainLayout>
  );
}

ProfileChangePwd.propTypes = {
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
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoad: email => dispatch(actions.initLoad(email)),
    onEditMember: member => dispatch(actions.updatePassword(member)),
    clearData: () => dispatch(actions.initState()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileChangePwd);
