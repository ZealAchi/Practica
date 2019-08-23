import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { modules } from 'Constants2';
import Grid from '@material-ui/core/Grid';
import Tasklist from 'components/Task';
import TaskForm from 'components/Task/TaskForm';
import PropTypes from 'prop-types';
import RenderBoard from 'components/Task/RenderBoard';
// import Typography from '@material-ui/core/Typography'

const listTask = [
  {
    id: 1,
    title: 'Leer un libro',
    description: 'Leer libro de material Ui',
    status: 0,
  },
  {
    id: 2,
    title: 'Jugar futbol',
    description: 'Con mis amigos',
    status: 2,
  },
  {
    id: 1,
    title: 'Jugar un juego',
    description: '',
    status: 1,
  },
];
function TaskBoard(props) {
  const { classes } = props;
  const renderBoard = <RenderBoard listTask={listTask} />;
  const renderForm = <TaskForm />;

  return (
    <div className={classes.taskBoard}>
      {renderForm}
      {renderBoard}
    </div>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
