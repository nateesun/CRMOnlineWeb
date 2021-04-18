import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  updateItemHeader: {
    border: '1px solid orange',
    boxShadow: '4px 2px',
    padding: '5px',
    width: '100%',
    textAlign: 'center',
  },
}));

export default function LabelTopic(props) {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.updateItemHeader}>
      {props.children}
    </Typography>
  );
}

LabelTopic.propTypes = {
  children: PropTypes.any,
};
