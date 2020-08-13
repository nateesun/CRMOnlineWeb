import React from 'react';

export default function DahboardContent(props) {
  const { profile } = props;
  const {
    prefix,
    firstName,
    lastName,
    pointBalance,
    pointRedemption,
  } = profile;

  return (
    <div>
      Point Balance: {pointBalance}
      <br />
      Point Redemption: {pointRedemption}
      <br />
    </div>
  );
}
