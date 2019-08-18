import React, { FC } from 'react';
import {
  Box,
  Button,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginTop: '1vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },
}));

const LGTMCard: FC = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/687474703a2f2f7777772e6c67746d2e696e2f702f494133745732796371.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            LGTM(Cocoa)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            LGTM画像です。
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const TaskList: FC = () => {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LGTMCard />
        </Grid>
        <Grid item xs={6}>
          <LGTMCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskList;
