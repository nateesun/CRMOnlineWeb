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
import intro from '../../images/welcome.png';

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
      console.log('database:', database);
    }
  }, [])

  return (
    <div
      style={{ textAlign: 'center', verticalAlign: 'middle', adding: '20px' }}
    >
      <h2><FormattedMessage {...messages.header} /></h2>
      {/* <h5>{database}</h5> */}
      <Img src={intro} width={300} />
    </div>
  );
}

export default HomePage
