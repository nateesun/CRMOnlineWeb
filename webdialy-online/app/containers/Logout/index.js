/**
 *
 * Logout
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useCookie from 'react-use-cookie';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { checkLogout } from 'containers/Login/actions';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import LogoutIcon from '../../images/logout.png';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
  margin-top: 50px;
`;

export function Logout(props) {
  useInjectReducer({ key: 'logout', reducer });
  useInjectSaga({ key: 'logout', saga });
  const [token, setToken] = useCookie('token', '');

  useEffect(() => {
    props.onCheckLogout();
    setToken('');
  }, []);

  return (
    <Wrapper>
      <img src={LogoutIcon} border={0} width={100} alt="" />
      <h4>
        <FormattedMessage {...messages.header} />
      </h4>
    </Wrapper>
  );
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onCheckLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  logout: selectors.makeSelectLogout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCheckLogout: email => {
      dispatch(checkLogout(email));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Logout);
