import React from 'react';
import PropTypes from 'prop-types';
import TabLayout from './TabLayout';
import ViewItem from './ViewItem';

export default function ContentPage(props) {
  ContentPage.propTypes = {
    getPage: PropTypes.string,
  };

  return (
    <React.Fragment>
      {props.getPage === 'LIST' && <TabLayout {...props} />}
      {props.getPage === 'VIEW' && <ViewItem {...props} />}
    </React.Fragment>
  );
}
