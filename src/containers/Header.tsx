import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { RouteComponentProps, withRouter } from 'react-router';
import {Box, Button, Grid, IconButton, MenuItem} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Path } from '../App';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    title: {
      cursor: 'pointer',
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

interface OwnProps {
  title?: string;
}

type HeaderProps = OwnProps & RouteComponentProps;

const PermanentDrawerLeft: FC<HeaderProps> = ({ history }) => {
  const classes = useStyles();

  const handleLinkClick = (path: Path) => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="subtitle1"
            noWrap
            onClick={() => handleLinkClick('/')}
          >
            LGTM Uploader
          </Typography>
          <Button color="inherit">
            <Typography variant="subtitle2">
              LGTM画像をアップロード
            </Typography>
          </Button>
          <MenuItem>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          <ListItem
            button
            key="setting"
            onClick={() => handleLinkClick('/how-to-use')}
          >
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="使い方" />
          </ListItem>
          <Divider />
          <ListItem button key="task" onClick={() => handleLinkClick('/task')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="タスク一覧" />
          </ListItem>
          <ListItem
            button
            key="settings"
            onClick={() => handleLinkClick('/settings')}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="設定" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default withRouter(PermanentDrawerLeft);
