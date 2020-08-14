/**
 *
 * RenderField
 *
 */

import React from 'react';
import TextField from '@material-ui/core/TextField';

function RenderField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <TextField
        {...input}
        variant="outlined"
        margin="normal"
        type={type}
        required
        fullWidth
        label={label}
        autoFocus
      />
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}

RenderField.propTypes = {};

export default RenderField;
