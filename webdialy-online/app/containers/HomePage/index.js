/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import useCookie from 'react-use-cookie';

import messages from './messages';
import intro from '../../images/pankhumhom.jpg';

const Img = styled.img`
  border-radius: 2px 10px 2px 10px;
  box-shadow: 7px 5px;
`;

const HomePage = (props) => {
  const [database, setDatabase] = useCookie('database', '');

  useEffect(()=>{
    const data = new URLSearchParams(props.location.search).get('data')||'';
    if(data){
      setDatabase(data);
    }
  }, [])

  return (
    <div style={{ textAlign: 'center', verticalAlign: 'middle' }}>
      <h2><FormattedMessage {...messages.header} /></h2>
      <Img src={intro} style={{ backgroundSize: 'contain', width: '100%' }} />
      <h5>{database}</h5>
    </div>
  );
}

export default HomePage
