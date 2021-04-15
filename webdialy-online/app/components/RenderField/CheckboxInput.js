import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxInput = props => {
  const { input, label } = props;
  return (
    <FormControlLabel
      control={<Checkbox {...input} value={input.value} onChange={input.onChange} />}
      label={label}
    />
  );
};

CheckboxInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.any,
};

export default CheckboxInput;
