/**
 *
 * RenderField
 *
 */

import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

function DateTimeInput({ input, label, required, meta: { touched, error } }) {
  return (
    <React.Fragment>
      <TextField
        {...input}
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
        label={label}
        required={required}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </React.Fragment>
  );
}

DateTimeInput.propTypes = {
  input: PropTypes.any,
  label: PropTypes.object,
  required: PropTypes.bool,
  meta: PropTypes.object,
};

export default DateTimeInput;
