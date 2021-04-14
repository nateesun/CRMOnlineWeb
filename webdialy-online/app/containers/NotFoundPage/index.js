/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import notfoundPageImages from './404_notfound.png';

const useStyles = makeStyles(() => ({
  root: {
    border: 0,
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <img
      src={notfoundPageImages}
      width="100%"
      className={classes.root}
      alt=""
    />
  );
}
