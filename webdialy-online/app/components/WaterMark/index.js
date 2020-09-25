/**
 *
 * WaterMark
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactWaterMark from 'react-watermark-component';

const options = {
  chunkWidth: 200,
  chunkHeight: 60,
  textAlign: 'left',
  textBaseline: 'bottom',
  globalAlpha: 0.17,
  rotateAngle: -0.26,
  fillStyle: '#666',
};

function WaterMark(props) {
  return (
    <ReactWaterMark
      waterMarkText="DEMO VERSION"
      openSecurityDefense
      options={options}
    >
      {props.children}
    </ReactWaterMark>
  );
}

WaterMark.propTypes = {
  children: PropTypes.any,
};

export default WaterMark;
