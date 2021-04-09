/**
 *
 * FileInput
 *
 */

import React from 'react';

const FileInput = ({ input, meta: omitMeta, ...props }) => {
  return <input type="file" {...props.input} {...props} />;
};

export default FileInput;
