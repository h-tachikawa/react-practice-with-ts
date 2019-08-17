import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles, Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  task: {
    marginTop: '5vh',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  item: {
    textAlign: 'center',
  },
  button: {
    marginTop: '1vh',
  },
}));

const TaskList: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.task}
    >
      <Grid item className={classes.item}>
        <Typography variant="h6">まだタスクがありません。</Typography>
        <Button variant="contained" color="secondary" className={classes.button}>
          タスクを追加する
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskList;
