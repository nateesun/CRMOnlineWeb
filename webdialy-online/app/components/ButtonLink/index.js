/**
 *
 * ButtonLink
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import messages from './messages';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function ButtonLink(props) {
  return <StyledLink to="/login">{props.children}</StyledLink>;
}

ButtonLink.propTypes = {};

export default ButtonLink;
