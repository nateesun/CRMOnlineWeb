import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PeopleIcon from '@material-ui/icons/People';
import LockIcon from '@material-ui/icons/Lock';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ButtonLink from 'components/ButtonLink';

const useStyles = makeStyles(() => ({
  itemActiveItem: {
    background: '#f1e6e2',
  },
}));

export default function LeftMenu(props) {
  const classes = useStyles();
  const { leftMenu = [], appConstants, scope, title } = props;
  const [open, setOpen] = useState(false);

  const leftMenuMaster = leftMenu.filter(
    item => item.menu_id === 'Master' || item.menu_id === 'Settings',
  );
  const leftMenuOther = leftMenu.filter(
    item => item.menu_id !== 'Master' && item.menu_id !== 'Settings',
  );

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (
      [
        'Database',
        'Promotion',
        'Roles',
        'Branch',
        'Company',
        'Product',
        'Stock',
      ].includes(title)
    ) {
      setOpen(true);
    }
  }, []);

  return (
    <List style={{ background: '#fbf9f8' }}>
      {leftMenuOther.map(({ id, icon, to_path: to }) => (
        <ButtonLink to={appConstants.publicPath + to} key={`menu${id}`}>
          <ListItem
            key={id}
            button
            className={clsx(id === title && classes.itemActiveItem)}
          >
            <FormattedMessage id={`${scope}.menu${id}`}>
              {title => (
                <ListItemIcon title={title}>
                  {icon === 'DnsRoundedIcon' && <DnsRoundedIcon />}
                  {icon === 'CardGiftcardIcon' && <CardGiftcardIcon />}
                  {icon === 'LocalMallIcon' && <LocalMallIcon />}
                  {icon === 'PeopleIcon' && <PeopleIcon />}
                  {icon === 'LockIcon' && <LockIcon />}
                  {icon === 'RecentActorsIcon' && <RecentActorsIcon />}
                </ListItemIcon>
              )}
            </FormattedMessage>
            <ListItemText>
              <FormattedMessage id={`${scope}.menu${id}`} />
            </ListItemText>
          </ListItem>
        </ButtonLink>
      ))}
      <Divider />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DnsRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="ข้อมูลระบบ" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" style={{ marginLeft: '55px' }}>
          {leftMenuMaster.map(({ id, icon, to_path: to }) => (
            <ButtonLink to={appConstants.publicPath + to} key={`menu${id}`}>
              <ListItem
                key={id}
                button
                className={clsx(id === title && classes.itemActiveItem)}
              >
                <ListItemText>
                  <FormattedMessage id={`${scope}.menu${id}`} />
                </ListItemText>
              </ListItem>
            </ButtonLink>
          ))}
        </List>
      </Collapse>
      <Divider />
    </List>
  );
}

LeftMenu.propTypes = {
  leftMenu: PropTypes.array,
  appConstants: PropTypes.object,
  scope: PropTypes.string,
  title: PropTypes.string,
};
