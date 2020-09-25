/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import intro from '../../images/welcome.png';

const Img = styled.img`
  border-radius: 2px 10px 2px 10px;
  box-shadow: 7px 5px;
`;

export default function HomePage() {
  return (
    <div
      style={{ textAlign: 'center', verticalAlign: 'middle', adding: '20px' }}
    >
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
      <Img src={intro} width={300} />
    </div>
  );
}
