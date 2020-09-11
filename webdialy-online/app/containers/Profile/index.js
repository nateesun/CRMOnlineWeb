/**
 *
 * Profile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectProfile } from 'containers/Login/selectors';
import reducer from './reducer';
import saga from './saga';
import ProfileContent from './ProfileContent';

export function Profile(props) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  const { loggedIn } = props.profile;

  if (!loggedIn) {
    return <Redirect push to="/login" />;
  }

  return (
    <div>
      <ProfileContent {...props} />
    </div>
  );
}

Profile.propTypes = {};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Profile);
