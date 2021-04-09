import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const InputCheckBox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

InputCheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.bool,
};

export default InputCheckBox;
