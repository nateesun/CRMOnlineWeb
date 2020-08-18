import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import ButtonLink from 'components/ButtonLink';

const categories = [
  {
    id: 'Account',
    children: [
      { id: 'Profile', icon: <PersonIcon />, to: '/profile' },
      { id: 'Logout', icon: <ExitToApp />, to: '/logout' },
    ],
  },
  {
    id: 'Orders',
    children: [
      { id: 'Hosting', icon: <PublicIcon />, to: '' },
      { id: 'Functions', icon: <SettingsEthernetIcon />, to: '' },
      { id: 'ML Kit', icon: <SettingsInputComponentIcon />, to: '' },
    ],
  },
  {
    id: 'Members',
    children: [
      { id: 'All Members', icon: <SettingsIcon />, to: '/members' },
      { id: 'Performance', icon: <TimerIcon />, to: '' },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon />, to: '' },
    ],
  },
  {
    id: 'Settings',
    children: [
      { id: 'Authentication', icon: <PeopleIcon />, to: '', active: true },
      { id: 'Database', icon: <DnsRoundedIcon />, to: '' },
      { id: 'Storage', icon: <PermMediaOutlinedIcon />, to: '' },
    ],
  }
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          <ButtonLink to="/" color="white">
            Web Dialy Online
          </ButtonLink>
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            <ButtonLink to="/dashboard" color="white">
            Home
            </ButtonLink>
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, to }) => (
              <ButtonLink to={to} key={`menu${childId}`}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(
                    classes.item,
                    active && classes.itemActiveItem,
                  )}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </ButtonLink>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
