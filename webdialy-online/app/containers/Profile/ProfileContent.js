import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileContent(props) {
  const { profile } = props;
  const { prefix, firstName, lastName } = profile;

  ProfileContent.propTypes = {
    profile: PropTypes.object,
  };

  return (
    <div>
      <h3>{`${prefix}${firstName} ${lastName}`}</h3>
      <span>Picture</span>
      <br />
      <span>Detail</span>
      <br />
    </div>
  );
}
