import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import RenderFromHelper from './RenderFromHelper';

const InputSelectOptions = ({ input, label, meta: { touched, error }, children, ...custom }) => {
  InputSelectOptions.propTypes = {
    input: PropTypes.any,
    label: PropTypes.any,
    meta: PropTypes.any,
    children: PropTypes.any,
  };

  return (
    <FormControl variant="outlined" error={touched && error} style={{ width: '100%' }}>
      <InputLabel htmlFor={input.id}>{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: input.id,
        }}
        label={label}
      >
        {children}
      </Select>
      {RenderFromHelper({ touched, error })}
    </FormControl>
  );
};

export default InputSelectOptions;
