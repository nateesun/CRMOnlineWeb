/**
 *
 * WaterMark
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ReactWaterMark from 'react-watermark-component';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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

WaterMark.propTypes = {};

export default WaterMark;
