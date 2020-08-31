import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tables from './Tables';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MainTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Company" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Branch" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Product" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Employee" href="/spam" {...a11yProps(3)} />
          <LinkTab label="Stock" href="/spam" {...a11yProps(4)} />
          <LinkTab label="Promotion" href="/spam" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Tables name="Company" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tables name="Branch" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tables name="Product" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tables name="Employee" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Tables name="Stock" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Tables name="Promotion" />
      </TabPanel>
    </div>
  );
}
