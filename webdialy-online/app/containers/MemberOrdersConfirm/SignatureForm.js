import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas';

const SignatureForm = props => {
  const [showLabel, setShowLabel] = useState(false);
  const sigPad = useRef({});

  const clear = () => {
    sigPad.current.clear();
  };

  const trim = () => {
    props.onExit(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  return (
    <Grid container>
      <Grid item style={{ border: '1px solid #eee' }}>
        <SignatureCanvas
          canvasProps={{
            className: 'sigCanvas',
            width: '250px',
            height: '200px',
          }}
          ref={sigPad}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container style={{ padding: '5px' }}>
          <Grid item>
            <Button onClick={() => clear()}>Clear</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ background: 'green', color: 'white' }}
              onClick={() => {
                trim();
                setShowLabel(true);
              }}
            >
              Confirm Signature
            </Button>
          </Grid>
          <Grid item xs={12}>
            {showLabel && (
              <div style={{ color: 'blue', padding: '10px' }}>
                บันทึกข้อมูลลายเซ็นต์แล้ว
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignatureForm;

SignatureForm.propTypes = {
  onExit: PropTypes.func,
};
