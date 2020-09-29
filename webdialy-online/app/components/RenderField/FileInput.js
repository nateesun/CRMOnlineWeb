/**
 *
 * FileInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const FileInput = ({
  input,
  meta: omitMeta,
  ...props
}) => {
  return (
    <input 
      type="file"
      {...props.input}
      {...props}
    />
  );
};

export default FileInput;
