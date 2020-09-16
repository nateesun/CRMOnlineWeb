/**
 *
 * MsCompany
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMsCompany from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import ContentPage from './ContentPage';
import saga from './saga';
import messages from './messages';

export function MsCompany(props) {
  useInjectReducer({ key: 'msCompany', reducer });
  useInjectSaga({ key: 'msCompany', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <ContentPage {...props} />
    </div>
  );
}

MsCompany.propTypes = {
  onInitLoad: PropTypes.func,
  onCreateItem: PropTypes.func,
  onUpdateItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onGetItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  msCompany: makeSelectMsCompany(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: () => dispatch(actions.initLoad()),
    onCreateItem: data => dispatch(actions.createItem(data)),
    onUpdateItem: data => dispatch(actions.updateItem(data)),
    onDeleteItem: id => dispatch(actions.deleteItem(id)),
    onGetItem: id => dispatch(actions.getItem(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MsCompany);
