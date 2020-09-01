import React from 'react';

export default function HeaderTable(props) {
    const { name } = props;
  return (
    <h3
      style={{
        background: '#ddd',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '3px 2px',
      }}
    >
      Menu / {name}
    </h3>
  );
}
