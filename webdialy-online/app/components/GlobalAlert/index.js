import React from 'react';
import SweetAlert from 'sweetalert2-react';
import PropTypes from 'prop-types';

export default function GlobalAlert(props) {
  const { show, title, type, text, onConfirm } = props;

  return <SweetAlert show={show} title={title} type={type} text={text} onConfirm={onConfirm} />;
}

GlobalAlert.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onConfirm: PropTypes.func,
};
