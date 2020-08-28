import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import sampleImg from '../../images/example/food1.jpg';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const data = [];
for (let i = 0; i < 40; i++) {
  data.push({
    src: sampleImg,
    title: 'โบโลน่าธรรมดา' + (i + 1),
    price: i + 20,
  });
}

function Media(props) {
  const { loading = false } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      {loading &&
        data.map((item, index) => (
          <Box
            key={index}
            width={135}
            marginRight={1.5}
            marginBottom={2}
            style={{ boxShadow: '3px 2px #123456' }}
            onClick={() => handleClickOpen()}
          >
            <img
              style={{ width: 135, height: 118, marginBottom: '8px' }}
              alt={item.title}
              src={item.src}
            />
            <Box pr={2}>
              <Typography
                gutterBottom
                variant="body2"
                style={{
                  color: '#756a67',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="textSecondary"
                align="right"
              >
                <span
                  style={{
                    color: 'green',
                    fontSize: '18px',
                    marginRight: '2px',
                  }}
                >
                  {item.price}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  บาท
                </span>
              </Typography>
            </Box>
          </Box>
        ))}
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
                      fontSize: '14px',
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
                      fontSize: '14px',
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
                  <Button style={{ background: '#76bd5f', color: 'white', width: '80%' }}>
                    ใส่ตระกร้า 36.00 บาท
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Dialog>
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function ShoppingContent() {
  return (
    <Box overflow="hidden">
      <Media loading />
      <Media />
    </Box>
  );
}
