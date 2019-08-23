import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { modules } from 'Constants2';
import Tasklist from 'components/Task';

const { STATUSES } = modules;

export default memo(function RenderBoard(props) {
  const { listTask } = props;
  return (
    <Grid container spacing={2}>
      {STATUSES.map((status, index) => {
        const taskFiltered = listTask.filter(
          task => task.status === status.value,
        );
        return (
          <Tasklist
            tasks={taskFiltered}
            status={status}
            key={status.value}
            index={index}
          />
        );
      })}
      {/* {console.log(STATUSES)} */}
    </Grid>
  );
});
