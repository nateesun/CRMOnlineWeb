/*
 * HomePage
 *
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useCookie from 'react-use-cookie';
import { Helmet } from 'react-helmet';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import messages from './messages';

const Img = styled.img`
  border-radius: 2px 10px 2px 10px;
  box-shadow: 7px 5px;
  background-size: contain;
  width: 85%;
`;

const HomePage = props => {
  useInjectReducer({ key: 'homepage', reducer });
  useInjectSaga({ key: 'homepage', saga });
  const [database, setDatabase] = useCookie('database', '');

  const loc = window.location.href.split('/');
  const apiServiceHost = `${loc[0]}//${loc[2]}`.replace('3000', '5000');

  useEffect(() => {
    const data = new URLSearchParams(props.location.search).get('data') || '';
    if (data) {
      setDatabase(data);
      props.onInitLoad();
    }
  }, []);

  const imgCompany = `${apiServiceHost}/${props.company.img_path}`;

  return (
    <div style={{ textAlign: 'center', verticalAlign: 'middle' }}>
      <Helmet>
        <title>{props.company.name}</title>
      </Helmet>
      <h2>
        <FormattedMessage {...messages.header} /> {props.company.name}
      </h2>
      {props.company && <Img src={imgCompany} />}
      <h5>build version: {database}</h5>
    </div>
  );
};

HomePage.propTypes = {
  company: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  company: selectors.makeSelectCompany(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: () => {
      dispatch(actions.initLoad());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
