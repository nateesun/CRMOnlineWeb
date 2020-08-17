/**
 *
 * RenderField
 *
 */

import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

function SelectField({ input, label, meta: { touched, error } }) {
  const classes = useStyles();
  const [prefix, setPrefix] = React.useState('');

  const handleChange = (event) => {
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
        <option value=""></option>
        <option value="คุณ">คุณ</option>
        <option value="นาย">นาย</option>
        <option value="นาง">นาง</option>
        <option value="นางสาว">นางสาว</option>
      </Select>
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </FormControl>
  );
}

SelectField.propTypes = {};

export default SelectField;
