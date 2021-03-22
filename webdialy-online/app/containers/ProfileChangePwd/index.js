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
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
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

  useEffect(() => {
    const getToken = getCookie('token') || '';
    if (getToken !== '') {
      props.initLoad(JSON.parse(getToken));
    }
  }, []);

  return (
    <React.Fragment>
      <SubMenu {...props} />
      <EditForm {...props} />
    </React.Fragment>
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
