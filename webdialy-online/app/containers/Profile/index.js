/**
 *
 * Profile
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectProfile, makeLoggedIn } from 'containers/Login/selectors';
import reducer from './reducer';
import saga from './saga';
import ProfileContent from './ProfileContent';

export function Profile(props) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  return (
    <div>
      <ProfileContent {...props} />
    </div>
  );
}

Profile.propTypes = {};

const mapStateToProps = createStructuredSelector({
  loggedIn: makeLoggedIn(),
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Profile);
