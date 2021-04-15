/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Select from './Select';
import ToggleOption from '../ToggleOption';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
}));
function Toggle(props) {
  const classes = useStyles();
  let content = <option>--</option>;

  if (props.values) {
    content = props.values.map(value => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <Select value={props.value} onChange={props.onToggle} className={classes.textWhite}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
