import React from 'react';
import PropTypes from 'prop-types';
import TableItems from './TableItems';

export default function ContentPage(props) {
  ContentPage.propTypes = {
    getPage: PropTypes.string,
  };

  return <React.Fragment>{props.getPage === 'LIST' && <TableItems {...props} />}</React.Fragment>;
}
