/**
 *
 * FileInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const FileInput = ({ input, meta: omitMeta, ...props }) => (
  <input type="file" {...props.input} {...props} />
);

FileInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default FileInput;
