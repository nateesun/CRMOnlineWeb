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
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PeopleIcon from '@material-ui/icons/People';
import LockIcon from '@material-ui/icons/Lock';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ButtonLink from 'components/ButtonLink';
import * as constants from './constants';

const menuList = [
  {
    id: 'Account',
    role: 'super|admin|member|employee',
    children: [
      { id: 'Overview', icon: <CardGiftcardIcon />, to: constants.PATH_DASHBOARD, active: true },
      { id: 'Profile', icon: <RecentActorsIcon />, to: constants.PATH_PROFILE },
    ],
  },
  {
    id: 'Orders',
    role: 'super|admin|member',
    children: [
      { id: 'Shopping', icon: <LocalMallIcon />, to: constants.PATH_SHOPPING },
      { id: 'Track Order', icon: <LocalMallIcon />, to: constants.PATH_ORDERS_TRACKING },
    ],
  },
  {
    id: 'Request Order',
    role: 'super|admin|employee',
    children: [
      { id: 'Check cart list', icon: <LocalMallIcon />, to: constants.PATH_CHECK_CARTS },
    ],
  },
  {
    id: 'Members',
    role: 'super|admin',
    children: [
      { id: 'Member List', icon: <PeopleIcon />, to: constants.PATH_MEMBER },
      { id: 'Use Promotion', icon: <PeopleIcon />, to: constants.PATH_USE_PROMOTION },
    ],
  },
  {
    id: 'Settings',
    role: 'super',
    children: [
      { id: 'Roles', icon: <LockIcon />, to: constants.PATH_MS_ROLE },
      { id: 'Database', icon: <DnsRoundedIcon />, to: constants.PATH_DATABASE },
    ],
  },
  {
    id: 'Master',
    role: 'super|admin',
    children: [
      { id: 'Company', icon: <DnsRoundedIcon />, to: constants.PATH_MS_COMPANY },
      { id: 'Branch', icon: <DnsRoundedIcon />, to: constants.PATH_MS_BRANCH },
      { id: 'Product', icon: <DnsRoundedIcon />, to: constants.PATH_MS_PRODUCT },
      { id: 'Stock', icon: <DnsRoundedIcon />, to: constants.PATH_MS_STOCK },
      { id: 'Promotion', icon: <DnsRoundedIcon />, to: constants.PATH_MS_PROMOTION },
    ],
  },
];

const leftMenus = [];

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
  const { classes, email, profile, ...other } = props;
  const { member_role } = profile;
  leftMenus.length = 0;
  if (profile) {
    menuList.forEach(item => {
      if(item.role.includes(member_role)){
        leftMenus.push(item);
      }
    });
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          <ButtonLink to={`${constants.publicPath}/`} color="white">
            Main Menu
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
            <ButtonLink to={`${constants.publicPath}/`} color="white">
              Home
            </ButtonLink>
          </ListItemText>
        </ListItem>
        {leftMenus.map(({ id, children }) => (
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
  email: PropTypes.string,
  profile: PropTypes.object,
};

export default withStyles(styles)(Navigator);
