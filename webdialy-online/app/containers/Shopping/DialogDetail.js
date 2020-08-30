import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import sampleImg from '../../images/example/food1.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

export default function DialogDetail(props) {
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
      <Typography align="center">
        <img src={sampleImg} width="50%" />
      </Typography>
      <List>
        <ListItem button>
          <ListItemText primary="โบโลน่าธรรมดา" secondary="36.00 บาท" />
        </ListItem>
        <Divider style={{ border: '1px solid #eee' }} />
        <ListItem button>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="warm"
                control={<Radio color="primary" />}
                label="อุ่น"
              />
              <FormControlLabel
                value="nowarm"
                control={<Radio color="primary" />}
                label="ไม่อุ่น"
              />
            </RadioGroup>
          </FormControl>
        </ListItem>
        <Divider style={{ border: '1px solid #eee' }} />
        <ListItem>
          <TextField
            id="standard-basic"
            label="ข้อความพิเศษ"
            style={{ width: '100%' }}
          />
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item xs={4}>
              <Typography align="right">
                <Button
                  variant="outlined"
                  style={{
                    background: 'red',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  -
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center">
                <input
                  type="number"
                  value="1"
                  style={{
                    border: '0px solid #eee',
                    width: '100px',
                    height: '35px',
                    textAlign: 'center',
                    fontSize: '22px',
                    fontWeight: 'bold',
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="left">
                <Button
                  variant="outlined"
                  style={{
                    background: 'green',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  +
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center">
                <Button
                  style={{
                    background: '#76bd5f',
                    color: 'white',
                    width: '80%',
                  }} onClick={()=>handleClose()}
                >
                  ใส่ตระกร้า 36.00 บาท
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Dialog>
  );
}
