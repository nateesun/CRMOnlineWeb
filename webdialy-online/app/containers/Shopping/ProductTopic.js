import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: ${props => (props.bg ? props.bg : 'green')};
  color: ${props => (props.color ? props.color: 'black')};
  height: 35px;
  padding: 5px;
`;

export default function ProductTopic(props) {
  const { label, bgColor, textColor } = props;
  return <Wrapper bg={bgColor} color={textColor}>{label}</Wrapper>;
}
