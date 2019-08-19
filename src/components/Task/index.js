import React from 'react';
import { withStyles, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TaskItem from './TaskItem';

export default withStyles(styles)(function Tasklist(props) {
  const { classes, tasks, status, index } = props;

  return (
    <Grid item md={4} xs={12} key={index}>
      <Box mt={2} mb={2}>
        <div className={classes.status}>{status.label}</div>
      </Box>
      <div className="classes wrapperListTask">
        {tasks.map(task => {
          const { title } = task;
          return <TaskItem task={task} status={status} key={task.id} />;
        })}
      </div>
    </Grid>
  );
});
