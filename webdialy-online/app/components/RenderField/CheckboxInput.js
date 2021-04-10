import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxInput = ({ input, label }) => (
  <FormControlLabel
    control={<Checkbox checked={input.value} onChange={input.onChange} />}
    label={label}
  />
);

CheckboxInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};

export default CheckboxInput;
