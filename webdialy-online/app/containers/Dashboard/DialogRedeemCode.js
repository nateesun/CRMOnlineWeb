import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import QRCode from 'qrcode.react';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Input = styled.input`
  text-align: center;
  border: none;
  border-bottom: 2px solid darkgrey;
  background-color: inherit;
  display: block;
  width: 100%;
  margin: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const DivHeader = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #dee5d5;
`;

const DivFooter = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default function DialogRedeemCode(props) {
  const [open, setOpen] = useState(true);
  const { redeemPoint, code } = props;

  useEffect(() => {
    props.onCreateRedeem(code);
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.handleClose(false);
  };

  return (
    <Dialog
      open={open}
      disableBackdropClick
      TransitionComponent={Transition}
      onClose={handleClose}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <DivHeader>Redeem Code</DivHeader>
      </DialogTitle>
      <DialogContent>
        <div align="center">
          <QRCode
            value={`${
              redeemPoint && redeemPoint.redeem_code
                ? redeemPoint.redeem_code
                : '00000000'
            }`}
          />
          <h3>Scan Qr code here</h3>
          <Input type="text" value={redeemPoint.redeem_code} readOnly />
        </div>
        <DivFooter>
          <Button variant="contained" onClick={handleClose} color="primary">
            Dismiss
          </Button>
        </DivFooter>
      </DialogContent>
    </Dialog>
  );
}
