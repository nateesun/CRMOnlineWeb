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
import { publicPath } from './constants';

const categories = [
  {
    id: 'Account',
    role: 'admin|member|employee',
    children: [
      {
        id: 'Overview',
        icon: <CardGiftcardIcon />,
        to: `${publicPath}/dashboard`,
        active: true,
      },
      {
        id: 'Profile',
        icon: <RecentActorsIcon />,
        to: `${publicPath}/profile`,
      },
    ],
  },
  {
    id: 'Orders',
    role: 'admin|member|employee',
    children: [
      { id: 'Shopping', icon: <LocalMallIcon />, to: `${publicPath}/shopping` },
      { id: 'Track Order', icon: <LocalMallIcon />, to: `${publicPath}/tracking` },
    ],
  },
  {
    id: 'Request Order',
    role: 'admin|employee',
    children: [
      { id: 'Check cart list', icon: <LocalMallIcon />, to: `${publicPath}/check_carts` },
    ],
  },
  {
    id: 'Members',
    role: 'admin',
    children: [
      { id: 'Member List', icon: <PeopleIcon />, to: `${publicPath}/members` },
    ],
  },
  {
    id: 'Settings',
    role: 'admin',
    children: [
      { id: 'Roles', icon: <LockIcon />, to: `${publicPath}/ms/role` },
      {
        id: 'Database',
        icon: <DnsRoundedIcon />,
        to: `${publicPath}/database`,
      },
    ],
  },
  {
    id: 'Master',
    role: 'admin',
    children: [
      {
        id: 'Company',
        icon: <DnsRoundedIcon />,
        to: `${publicPath}/ms/company`,
      },
      { id: 'Branch', icon: <DnsRoundedIcon />, to: `${publicPath}/ms/branch` },
      {
        id: 'Product',
        icon: <DnsRoundedIcon />,
        to: `${publicPath}/ms/product`,
      },
      {
        id: 'Employee',
        icon: <DnsRoundedIcon />,
        to: `${publicPath}/ms/employee`,
      },
      { id: 'Stock', icon: <DnsRoundedIcon />, to: `${publicPath}/ms/stock` },
      {
        id: 'Redeem',
        icon: <DnsRoundedIcon />,
        to: `${publicPath}/ms/promotion`,
      },
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
    categories.forEach(item => {
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
          <ButtonLink to={`${publicPath}/`} color="white">
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
            <ButtonLink to={`${publicPath}/`} color="white">
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
