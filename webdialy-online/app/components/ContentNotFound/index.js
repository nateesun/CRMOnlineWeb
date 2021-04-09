import React from 'react';
import ImageNotfound from './notfound.png';

export default function ContentNotFound(props) {
  return (
    <div style={{ textAlign: 'center', color: '#ddd' }}>
      <img src={ImageNotfound} width={100} />
      <h1>{props.label}</h1>
    </div>
  );
}
