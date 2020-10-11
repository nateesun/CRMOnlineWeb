/**
 *
 * RenderField
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

function SelectField({ input, label, meta: { touched, error } }) {
  const classes = useStyles();
  const [prefix, setPrefix] = useState('');

  const handleChange = event => {
    setPrefix(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        {...input}
        labelId="demo-simple-select-outlined-label"
        native
        value={prefix}
        onChange={handleChange}
        label={label}
      >
        <option value="" />
        <option value="คุณ" key="คุณ">
          คุณ
        </option>
        <option value="นาย" key="นาย">
          นาย
        </option>
        <option value="นาง" key="นาง">
          นาง
        </option>
        <option value="นางสาว" key="นางสาว">
          นางสาว
        </option>
      </Select>
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </FormControl>
  );
}

SelectField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.object,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  meta: PropTypes.object,
};

export default SelectField;
