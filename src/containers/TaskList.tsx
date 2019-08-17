import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  task: {
    marginTop: '7vh',
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
      <Grid item>
        <Typography variant="h6">まだタスクがありません。</Typography>
        <Button variant="contained" color="secondary">
          タスクを追加する
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskList;
