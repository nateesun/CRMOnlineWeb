/**
 *
 * Members
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import MemberTable from './MemberTable';
import * as selectors from './selectors';
import * as actions from './actions';

export function Members(props) {
  useInjectReducer({ key: 'members', reducer });
  useInjectSaga({ key: 'members', saga });

  useEffect(() => {
    props.onInitLoad();
  }, []);

  return (
    <MemberTable {...props} />
  );
}

Members.propTypes = {
  members: PropTypes.array,
  onInitLoad: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  members: selectors.makeSelectMembers(),
  status: selectors.makeSelectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: () => dispatch(actions.loadMembers()),
    onEdit: member => dispatch(actions.editMember(member)),
    onDelete: id => dispatch(actions.deleteMember(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Members);
