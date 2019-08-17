import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
import TaskList from './containers/TaskList';
import Header from './components/Header';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const App: FC = () => {
  const title = 'My Application';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={title} />
      <Switch>
        <Route path="/" exact component={TaskList} />
        <Route path="/task" component={TaskList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
