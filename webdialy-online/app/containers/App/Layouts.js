import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Login from 'containers/Login/Loadable';
import Logout from 'containers/Logout/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import LineLogin from 'containers/LineLogin/Loadable';
import Register from 'containers/Register/Loadable';
import ForgotPassword from 'containers/ForgotPassword/Loadable';
import RecoverPassword from 'containers/RecoverPassword/Loadable';
import Profile from 'containers/Profile/Loadable';
import ProfileEdit from 'containers/ProfileEdit/Loadable';
import AddressShipping from 'containers/AddressShipping/Loadable';
import ProfileChangePwd from 'containers/ProfileChangePwd/Loadable';
import Members from 'containers/Members/Loadable';
import MsCompany from 'containers/MsCompany/Loadable';
import MsBranch from 'containers/MsBranch/Loadable';
import MsProduct from 'containers/MsProduct/Loadable';
import MsStock from 'containers/MsStock/Loadable';
import MsPromotion from 'containers/MsPromotion/Loadable';
import MsRole from 'containers/MsRole/Loadable';
import Shopping from 'containers/Shopping/Loadable';
import CheckoutOrder from 'containers/CheckoutOrder/Loadable';
import GoogleMap from 'containers/GoogleMap/Loadable';
import MemberTracking from 'containers/MemberTracking/Loadable';
import CheckCarts from 'containers/CheckCarts/Loadable';
import MemberOrdersConfirm from 'containers/MemberOrdersConfirm/Loadable';
import DatabaseConfig from 'containers/DatabaseConfig/Loadable';
import UsePromotion from 'containers/UsePromotion/Loadable';
import * as path from './constants';
import Navigator from './Navigator';
import Header from './Header';
import SubMenu from './SubMenu';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://softcrmpkh.dyndns.org:3000/">
        webdaily-online.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(1),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};

function Layouts(props) {
  const { classes, login } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              leftmenu={props.leftMenu}
              profile ={props.profile}
              email={login.email}
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator
              leftmenu={props.leftMenu}
              profile={props.profile}
              email={login.email}
              PaperProps={{ style: { width: drawerWidth } }}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header profile={props.profile} onDrawerToggle={handleDrawerToggle} />
          <SubMenu leftMenu={props.leftMenu} profile={props.profile} />
          <main className={classes.main}>
            <Switch>
              <Route exact path={`${path.publicPath}/`} component={HomePage} />
              <Route path={path.PATH_LOGIN} component={Login} />
              <Route path={path.PATH_LOGOUT} component={Logout} />
              <Route path={path.PATH_DASHBOARD} component={Dashboard} />
              <Route path={path.PATH_REGISTER} component={Register} />
              <Route path={path.PATH_FORGOT_PWD} component={ForgotPassword} />
              <Route path={path.PATH_RECOVER_PWD} component={RecoverPassword} />
              <Route path={path.PATH_PROFILE} component={Profile} />
              <Route path={path.PATH_PROFILE_EDIT} component={ProfileEdit} />
              <Route path={path.PATH_ADDRESS_SHIPPING} component={AddressShipping} />
              <Route
                path={path.PATH_PROFILE_CHANGE_PWD}
                component={ProfileChangePwd}
              />
              <Route path={path.PATH_MEMBER} component={Members} />
              <Route path={path.PATH_SHOPPING} component={Shopping} />
              <Route
                path={path.PATH_CHECKOUT_ORDER}
                component={CheckoutOrder}
              />
              <Route path={path.PATH_LINE_LOGIN} component={LineLogin} />
              <Route path={path.PATH_MS_COMPANY} component={MsCompany} />
              <Route path={path.PATH_MS_BRANCH} component={MsBranch} />
              <Route path={path.PATH_MS_PRODUCT} component={MsProduct} />
              <Route path={path.PATH_MS_STOCK} component={MsStock} />
              <Route path={path.PATH_MS_ROLE} component={MsRole} />
              <Route path={path.PATH_MS_PROMOTION} component={MsPromotion} />
              <Route path={path.PATH_TEST_GOOGLE_MAP} component={GoogleMap} />
              <Route path={path.PATH_ORDERS_TRACKING} component={MemberTracking} />
              <Route path={path.PATH_CHECK_CARTS} component={CheckCarts} />
              <Route path={path.PATH_MEMBER_ORDERS_CONFIRM} component={MemberOrdersConfirm} />
              <Route path={path.PATH_DATABASE} component={DatabaseConfig} />
              <Route path={path.PATH_USE_PROMOTION} component={UsePromotion} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool,
  login: PropTypes.object,
};

export default withStyles(styles)(Layouts);
