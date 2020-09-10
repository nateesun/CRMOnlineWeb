import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditForm from './EditForm';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    background: 'white',
    border: '0px',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ProfileEditForm(props) {
  const { open, handleClose, Transition } = props;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title} />
        <IconButton
          edge="start"
          onClick={handleClose}
          aria-label="close"
          style={{ color: 'black' }}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <EditForm {...props} />
    </Dialog>
  );
}
