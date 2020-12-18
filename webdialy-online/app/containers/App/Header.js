import React from 'react';
import { getCookie } from 'react-use-cookie';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import LocaleToggle from 'containers/LocaleToggle';
import ButtonLink from 'components/ButtonLink';
import messages from './messages';
import { publicPath } from './constants';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes, onDrawerToggle, profile } = props;
  const loggedIn = getCookie('token') || '';
  const email = loggedIn ? JSON.parse(getCookie('token')): '';

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={0}
        style={{ background: 'chocolate' }}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs></Grid>
            <Grid item>
              <LocaleToggle />
            </Grid>
            <Grid item>
              {loggedIn ? (
                <ButtonLink to={`${publicPath}/logout`}>
                  <Button size="large" startIcon={<ExitToApp />}>
                    <FormattedMessage {...messages.headerLogout} />
                  </Button>
                </ButtonLink>
              ) : (
                <ButtonLink to={`${publicPath}/login`}>
                  <Button size="large" startIcon={<LockIcon />}>
                    <FormattedMessage {...messages.headerLogin} />
                  </Button>
                </ButtonLink>
              )}
            </Grid>
          </Grid>
        </Toolbar>
        {loggedIn && (
          <Typography
            component="span"
            style={{
              textAlign: 'right',
              fontSize: '12px',
              paddingRight: '26px',
              paddingBottom: '5px',
            }}
          >
            <ButtonLink to={`${publicPath}/profile`} color="white">
              สวัสดี {profile.prefix} {profile.first_name} {profile.last_name}
            </ButtonLink>
          </Typography>
        )}
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
