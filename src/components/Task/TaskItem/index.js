import React from 'react';
import {
  withStyles,
  Fab,
  Typography,
  Card,
  CardContent,
  CardActions,
  Icon,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

export default withStyles(styles)(function TaskItem(props) {
  const { classes, task, status } = props;
  const { title, id } = task;
  return (
    <Card key={id} className={classes.card}>
      <CardContent>
        <Grid container className="space-between">
          <Grid item md={8}>
            <Typography component="h2">{title}</Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab
          color="primary"
          aria-label="Edit"
          className={classes.fab}
          size="small"
        >
          <Icon fontSize="small">edit_icon</Icon>
        </Fab>
        <Fab
          color="danger"
          aria-label="Delete"
          className={classes.fab}
          size="small"
        >
          <Icon fontSize="small">delete_icon</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
});
