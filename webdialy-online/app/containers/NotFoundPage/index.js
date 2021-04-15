/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonLink from 'components/ButtonLink';
import { publicPath } from 'containers/App/constants';

export default function NotFound() {
  return (
    <div align="center">
      <h1>404</h1>
      <h3>Page not found</h3>
      <h4
        style={{
          border: '1px solid #bbb',
          padding: '10px',
          background: 'red',
          color: 'white',
          width: '400px',
        }}
      >
        Sorry, we couldn't find this page.
      </h4>
      <ButtonLink to={`${publicPath}`}>
        <Button variant="contained" color="primary">
          Go to homepage
        </Button>
      </ButtonLink>
    </div>
  );
}
