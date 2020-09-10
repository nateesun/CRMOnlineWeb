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
import { editMember } from './actions';
import { makeUpdateStatus, makeErrorUpdate } from './selectors';

export function Profile(props) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  const { onEditMember } = props;
  const { loggedIn } = props.profile;

  if (!loggedIn) {
    return <Redirect push to="/login" />;
  }

  return (
    <div>
      <ProfileContent {...props} onEditMember={onEditMember} />
    </div>
  );
}

Profile.propTypes = {
  onEditMember: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  updateStatus: makeUpdateStatus(),
  errorUpdate: makeErrorUpdate(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditMember: member => dispatch(editMember(member)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Profile);
