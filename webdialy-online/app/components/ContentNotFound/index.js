import React from 'react';
import PropTypes from 'prop-types';
import ImageNotfound from './notfound.png';

export default function ContentNotFound(props) {
  return (
    <div style={{ textAlign: 'center', color: '#ddd' }}>
      <img src={ImageNotfound} width={100} alt="Image not found" />
      <h1>{props.label}</h1>
    </div>
  );
}

ContentNotFound.propTypes = {
  label: PropTypes.string,
};
