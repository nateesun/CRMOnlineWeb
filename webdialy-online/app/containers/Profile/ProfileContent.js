import React from 'react';

export default function ProfileContent(props) {
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
      <h3>{`${prefix}${firstName} ${lastName}`}</h3>
      <span>Picture</span><br />
      <span>Detail</span><br />
      Point Balance: {pointBalance}
      <br />
      Point Redemption: {pointRedemption}
      <br />
    </div>
  );
}
