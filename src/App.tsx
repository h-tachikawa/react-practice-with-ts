import React, { FC } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
import Grid from '@material-ui/core/Grid';
import TaskList from './containers/TaskList';
import Header from './containers/Header';
import Settings from './containers/Settings';
import HowToUse from './components/HowToUse';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: '0vh',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

export type Path = '/' | '/how-to-use' | '/task' | '/settings';

const App: FC = () => {
  const title = 'My Application';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/task" component={TaskList} />
          <Route path="/settings" component={Settings} />
          <Route path="/how-to-use" component={HowToUse} />
          <Redirect to="/" />
        </Switch>
      </Grid>
    </div>
  );
};

export default App;
