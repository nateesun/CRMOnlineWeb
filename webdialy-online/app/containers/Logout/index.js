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
import LockIcon from '@material-ui/icons/Lock';
import ButtonLink from 'components/ButtonLink';
import Button from '@material-ui/core/Button';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { checkLogout } from 'containers/Login/actions';
import * as appActions from 'containers/App/actions';
import * as appConstant from 'containers/App/constants';
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
    return () => token;
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        <img src={LogoutIcon} border={0} width={100} alt="" />
        <h4>
          <FormattedMessage {...messages.header} />
        </h4>
        <ButtonLink to={`${appConstant.publicPath}/login`}>
          <Button color="primary" size="large" startIcon={<LockIcon />}>
            <FormattedMessage {...messages.loginButton} />
          </Button>
        </ButtonLink>
      </Wrapper>
    </React.Fragment>
  );
}

Logout.propTypes = {
  onCheckLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  logout: selectors.makeSelectLogout(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCheckLogout: email => {
      dispatch(checkLogout(email));
      dispatch(appActions.clearMenu());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Logout);
