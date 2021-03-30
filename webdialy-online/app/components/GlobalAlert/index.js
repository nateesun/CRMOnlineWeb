import React from 'react';
import SweetAlert from 'sweetalert2-react';

export default function GlobalAlert(props) {
  const { show, title, type, text, onConfirm } = props;

  return (
    <SweetAlert
      show={show}
      title={title}
      type={type}
      text={text}
      onConfirm={onConfirm}
    />
  );
}
