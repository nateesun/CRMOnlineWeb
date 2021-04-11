/**
 *
 * ProfileShipping
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCookie } from 'react-use-cookie';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as appConstants from 'containers/App/constants';
import { makeSelectLogin } from 'containers/Login/selectors';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import EditForm from './EditForm';
import * as selectors from './selectors';

export function ProfileShipping(props) {
  useInjectReducer({ key: 'profileShipping', reducer });
  useInjectSaga({ key: 'profileShipping', saga });

  const token = getCookie('token') || '';

  useEffect(() => {
    if (token) {
      props.initLoad(JSON.parse(token));
    }
  }, []);

  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />;
  }

  return (
    <MainLayoutApp title="Edit Shipping" {...props}>
      <EditForm {...props} />
    </MainLayoutApp>
  );
}

ProfileShipping.propTypes = {
  dispatch: PropTypes.func,
  clearData: PropTypes.func,
  initLoad: PropTypes.func,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: mainSelectors.makeSelectProfile(),
  shipping: selectors.makeSelectProfileShipping(),
  updateStatus: selectors.makeUpdateStatus(),
  errorUpdate: selectors.makeErrorUpdate(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoad: memberCode => dispatch(actions.initLoad(memberCode)),
    onEditShipping: address => dispatch(actions.editShipping(address)),
    onChangeMapsValue: mapsData => dispatch(actions.changeMapsValue(mapsData)),
    clearData: () => dispatch(actions.initState()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileShipping);
