/**
 * AccessDeniedPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonLink from 'components/ButtonLink';
import { publicPath } from 'containers/App/constants';

export default function AccessDeniedPage() {
  return (
    <div align="center">
      <h1>403</h1>
      <h3>Access Denied...</h3>
      <h4
        style={{ border: '1px solid #bbb', padding: '10px', background: 'orange', width: '400px' }}
      >
        You don't have permission to access this page
      </h4>
      <ButtonLink to={`${publicPath}`}>
        <Button variant="contained" color="primary">
          Go to homepage
        </Button>
      </ButtonLink>
    </div>
  );
}
