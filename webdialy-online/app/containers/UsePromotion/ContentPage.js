import React from 'react';
import PropTypes from 'prop-types';
import TableItems from './TableItems';

export default function ContentPage(props) {
  ContentPage.propTypes = {
    getPage: PropTypes.string,
  };

  return (
    <div>
      {props.getPage === 'LIST' && <TableItems {...props} />}
    </div>
  );
}
