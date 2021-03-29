import { Grid } from '@material-ui/core';
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
    props.onExit(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} style={{background: 'white', margin: '10px', border: '1px solid gray'}}>
        <SignatureCanvas
          canvasProps={{
            width: '250px',
            height: '200px',
            className: 'sigCanvas',
          }}
          ref={sigPad}
        />
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};

export default SignatureForm;
