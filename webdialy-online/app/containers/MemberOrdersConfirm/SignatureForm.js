import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';

const ButtonCommand = styled.button`
  padding: 10px;
  border: 0px;
  border-radius: 10px;
  margin-bottom: 20px;
  outline: none;
`;

const SignatureForm = props => {
  const sigPad = useRef({});

  const clear = () => {
    sigPad.current.clear();
  };

  const trim = () => {
    props.onExit(sigPad.current.getTrimmedCanvas().toDataURL('image/png'))
  };
  
  return (
    <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <div
        style={{
          background: 'white',
          border: '1px solid #bbb',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        <SignatureCanvas
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} 
          ref={sigPad}
        />
      </div>
      <div>
        <ButtonCommand
          onClick={() => clear()}
          style={{
            background: '#bbb',
            color: 'black',
            marginRight: '5px',
            width: '100px',
          }}
        >
          Clear
        </ButtonCommand>
        <ButtonCommand
          onClick={() => trim()}
          style={{ background: 'green', color: 'white' }}
        >
          Confirm Signature
        </ButtonCommand>
      </div>
    </div>
  );
};

export default SignatureForm;
