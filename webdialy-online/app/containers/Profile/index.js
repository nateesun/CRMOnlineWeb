/**
 *
 * Profile
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
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import ProfileContent from './ProfileContent';
import * as selectors from './selectors';

export function Profile(props) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  useEffect(() => {
    const getToken = getCookie('token') || '';
    if (getToken !== '') {
      props.initLoad(JSON.parse(getToken));
      props.initLoadCompany();
    }
  }, []);

  return <ProfileContent {...props} />;
}

Profile.propTypes = {
  initLoad: PropTypes.func,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: selectors.makeSelectProfile(),
  company: selectors.makeSelectCompany(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCompany: () => dispatch(actions.initLoadCompany()),
    initLoad: email => {
      dispatch(actions.initLoad(email));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Profile);
