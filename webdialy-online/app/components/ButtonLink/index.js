/**
 *
 * ButtonLink
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.size ? props.size : 'plain')};
`;

function ButtonLink(props) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}

ButtonLink.propTypes = {
  children: PropTypes.any,
};

export default ButtonLink;
