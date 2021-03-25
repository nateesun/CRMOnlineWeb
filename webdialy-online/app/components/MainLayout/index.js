import React, { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import Badge from '@material-ui/core/Badge';
import { FormattedMessage } from 'react-intl';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
// menu items start
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PeopleIcon from '@material-ui/icons/People';
import LockIcon from '@material-ui/icons/Lock';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
// menu items end
import * as appConstants from 'containers/App/constants';
import LocaleToggle from 'containers/LocaleToggle';
import ButtonLink from 'components/ButtonLink';
import { scope } from './messages';
import messages from './messages';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'chocolate',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    // overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const MainLayout = props => {
  const classes = useStyles();
  const { leftMenu } = props;
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="span"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {props.title}
          </Typography>
          <LocaleToggle />
          <React.Fragment>
            <ButtonLink to={`${appConstants.publicPath}/logout`}>
              <ExitToApp />
            </ButtonLink>
          </React.Fragment>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <React.Fragment>
            {leftMenu.map(({ id, icon, active, to_path: to }) => (
              <ButtonLink to={appConstants.publicPath + to} key={`menu${id}`}>
                <ListItem
                  key={id}
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
                    <FormattedMessage id={`${scope}.menu${id}`} />
                  </ListItemText>
                </ListItem>
              </ButtonLink>
            ))}
          </React.Fragment>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  );
};

export default memo(MainLayout);
