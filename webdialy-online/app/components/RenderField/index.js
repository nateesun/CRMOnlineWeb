/**
 *
 * RenderField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function RenderField({
  input,
  label,
  type,
  required,
  autoFocus,
  disabled,
  meta: { touched, error },
}) {
  return (
    <div>
      <TextField
        {...input}
        variant="outlined"
        margin="normal"
        type={type}
        fullWidth
        label={label}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
      />
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}

RenderField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.object,
  type: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
};

export default RenderField;
