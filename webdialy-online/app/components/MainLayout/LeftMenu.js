import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PeopleIcon from '@material-ui/icons/People';
import LockIcon from '@material-ui/icons/Lock';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import List from '@material-ui/core/List';
import { FormattedMessage } from 'react-intl';
import ButtonLink from 'components/ButtonLink';

const useStyles = makeStyles(() => ({
  itemActiveItem: {
    background: '#f1e6e2',
  },
}));

export default function LeftMenu(props) {
  const classes = useStyles();
  const { leftMenu = [], appConstants, scope, title } = props;

  return (
    <List style={{ background: '#fbf9f8' }}>
      <React.Fragment>
        {leftMenu.map(({ id, icon, to_path: to }) => (
          <ButtonLink to={appConstants.publicPath + to} key={`menu${id}`}>
            <ListItem
              key={id}
              button
              className={clsx(id === title && classes.itemActiveItem,
              )}
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
      </React.Fragment>
    </List>
  );
}

LeftMenu.propTypes = {
  leftMenu: PropTypes.array,
  appConstants: PropTypes.object,
  scope: PropTypes.string,
  title: PropTypes.string,
};
