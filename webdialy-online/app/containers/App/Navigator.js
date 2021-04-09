import React from 'react';
import { FormattedMessage } from 'react-intl';
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
import * as appConstants from 'containers/App/constants';
import ButtonLink from 'components/ButtonLink';
import messages, { scope } from './messages';

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

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

function Navigator(props) {
  const { classes, profile, ...other } = props;
  leftMenus.length = 0;
  if (profile) {
    const grouped = groupBy(props.leftmenu, item => item.menu_id);
    grouped.forEach(item => {
      leftMenus.push({
        id: item[0].menu_id,
        role: item[0].role,
        children: item,
      });
    });
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          <ButtonLink to={`${appConstants.publicPath}/`} color="white">
            <FormattedMessage {...messages.mainMenu} />
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
            <ButtonLink to={`${appConstants.publicPath}/`} color="white">
              <FormattedMessage {...messages.homeTitle} />
            </ButtonLink>
          </ListItemText>
        </ListItem>
        {leftMenus &&
          leftMenus.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                  <FormattedMessage id={`${scope}.menuTitle${id}`} />
                </ListItemText>
              </ListItem>
              {children.map(({ id2, icon, active, to_path: to }) => (
                <ButtonLink
                  to={appConstants.publicPath + to}
                  key={`menu${id2}`}
                >
                  <ListItem
                    key={id2}
                    button
                    className={clsx(
                      classes.item,
                      active === 'Y' && classes.itemActiveItem,
                    )}
                  >
                    <ListItemIcon className={classes.itemIcon}>
                      {icon === 'DnsRoundedIcon' && <DnsRoundedIcon />}
                      {icon === 'CardGiftcardIcon' && <CardGiftcardIcon />}
                      {icon === 'LocalMallIcon' && <LocalMallIcon />}
                      {icon === 'PeopleIcon' && <PeopleIcon />}
                      {icon === 'LockIcon' && <LockIcon />}
                      {icon === 'RecentActorsIcon' && <RecentActorsIcon />}
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                    >
                      <FormattedMessage id={`${scope}.menu${id2}`} />
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
  profile: PropTypes.object,
  leftmenu: PropTypes.array,
};

export default withStyles(styles)(Navigator);
