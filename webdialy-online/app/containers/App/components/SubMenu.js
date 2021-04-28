import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import history from 'utils/history';
import * as path from '../constants';
import { scope } from './messages';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 999,
  },
  haveLeftMenu: {
    border: '1px solid chocolate',
    borderRadius: '10px 10px 5px 5px',
    margin: '1px',
  },
});

const SubMenu = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleClick = p => history.push(p);

  if (props.profile.member_role !== 'member') {
    return <span />;
  }
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {props.leftMenu &&
        props.leftMenu.map(item => {
          let icon = null;
          if (item.icon === 'CardGiftcardIcon') {
            icon = <CardGiftcardIcon />;
          } else if (item.icon === 'LocalMallIcon') {
            icon = <LocalMallIcon />;
          } else if (item.icon === 'RecentActorsIcon') {
            icon = <RecentActorsIcon />;
          }
          return (
            <BottomNavigationAction
              key={item.id}
              icon={icon}
              label={<FormattedMessage id={`${scope}.menu${item.id}`} />}
              className={classes.haveLeftMenu}
              onClick={() => handleClick(path.publicPath + item.to_path)}
            />
          );
        })}
    </BottomNavigation>
  );
};

SubMenu.propTypes = {
  profile: PropTypes.object,
  leftMenu: PropTypes.array,
};

export default SubMenu;
