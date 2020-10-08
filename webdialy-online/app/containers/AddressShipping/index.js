/**
 *
 * AddressShipping
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
import { makeSelectProfileData } from 'containers/Profile/selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import EditForm from './EditForm';
import * as selects from './selectors';

export function AddressShipping(props) {
  useInjectReducer({ key: 'addressShipping', reducer });
  useInjectSaga({ key: 'addressShipping', saga });

  useEffect(() => {
    props.initLoad(props.profile.code);
  }, []);

  return <EditForm {...props} />;
}

AddressShipping.propTypes = {
  dispatch: PropTypes.func,
  clearData: PropTypes.func,
  initLoad: PropTypes.func,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: makeSelectProfileData(),
  shipping: selects.makeSelectAddressShipping,
  updateStatus: selects.makeUpdateStatus(),
  errorUpdate: selects.makeErrorUpdate(),
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

export default compose(withConnect)(AddressShipping);
