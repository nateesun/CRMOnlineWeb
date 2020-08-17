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
import makeSelectMembers from './selectors';
import reducer from './reducer';
import saga from './saga';
import MemberTable from './MemberTable';
import { loadMembers, deleteMember, editMember } from './actions';

export function Members(props) {
  useInjectReducer({ key: 'members', reducer });
  useInjectSaga({ key: 'members', saga });

  useEffect(() => {
    props.onInitLoad();
  }, []);

  return (
    <div>
      <MemberTable {...props} />
    </div>
  );
}

Members.propTypes = {
  listMembers: PropTypes.array,
  onInitLoad: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  members: makeSelectMembers(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: () => dispatch(loadMembers()),
    onEdit: member => dispatch(editMember(member)),
    onDelete: memberCode => dispatch(deleteMember(memberCode)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Members);
