import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  </div>
);

export default renderField;
