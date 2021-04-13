/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import notfoundPageImages from './404_notfound.png';

export default function NotFound() {
  return (
    <img src={notfoundPageImages} width="100%" style={{ border: 0 }} alt="" />
  );
}
