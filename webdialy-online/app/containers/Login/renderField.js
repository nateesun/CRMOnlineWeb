import React from 'react';
import TextField from '@material-ui/core/TextField';

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label htmlFor={label}>{label}</label>
//     <div>
//       <input {...input} type={type} placeholder={label} />
//       {touched && error && <span style={{ color: 'red' }}>{error}</span>}
//     </div>
//   </div>
// );
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <TextField
      {...input}
      variant="outlined"
      margin="normal"
      type={type}
      required
      fullWidth
      label={label}
      autoFocus
    />
    {touched && error && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export default renderField;
