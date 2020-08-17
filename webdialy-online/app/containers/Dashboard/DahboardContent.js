import React from 'react';
import PropTypes from 'prop-types';

export default function DahboardContent(props) {
  const { profile } = props;
  const { pointBalance, pointRedemption } = profile;

  DahboardContent.propTypes = {
    profile: PropTypes.object,
  };

  return (
    <div>
      Point Balance: {pointBalance}
      <br />
      Point Redemption: {pointRedemption}
      <br />
    </div>
  );
}
