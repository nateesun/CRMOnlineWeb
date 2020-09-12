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
import ButtonLink from 'components/ButtonLink';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectProfileEdit,
  makeUpdateStatus,
  makeErrorUpdate,
} from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import EditForm from './EditForm';

export function ProfileEdit(props) {
  useInjectReducer({ key: 'profileEdit', reducer });
  useInjectSaga({ key: 'profileEdit', saga });

  useEffect(() => {
    if (props.match.params.id !== '') {
      props.initLoad(props.match.params.id);
    }
    return () => {
      props.clearData();
    };
  }, []);

  if (
    props.profile.member.email &&
    props.profile.member.code === props.match.params.id
  ) {
    return <EditForm {...props} />;
  } else {
    return (
    <div>
      <h1>Loading...</h1>
      <ButtonLink to={`/profile`}>Refresh</ButtonLink>
    </div>
    );
  }
}

ProfileEdit.propTypes = {
  dispatch: PropTypes.func,
  clearData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfileEdit(),
  updateStatus: makeUpdateStatus(),
  errorUpdate: makeErrorUpdate(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoad: code => dispatch(actions.initLoadProfile(code)),
    onEditMember: member => dispatch(actions.editMember(member)),
    clearData: () => dispatch(actions.defaultAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileEdit);
