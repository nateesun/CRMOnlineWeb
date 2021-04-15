import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ImageNotfound from './notfound.png';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    color: '#ddd',
  },
}));

export default function ContentNotFound(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={ImageNotfound} width={100} alt="" />
      <h1>{props.label}</h1>
    </div>
  );
}

ContentNotFound.propTypes = {
  label: PropTypes.any,
};
