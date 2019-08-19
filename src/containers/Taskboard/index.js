import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TaskForm from 'components/Task/TaskForm';
import PropTypes from 'prop-types';
import RenderBoard from 'components/Task/RenderBoard';
import { bindActionCreators } from 'redux';
import * as taskActions from 'redux/actions/task';
// import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux';

function TaskBoard(props) {
  // const {  } = props;
  function loadData() {
    const { taskActionsCreators } = props;
    const { fetchListTask } = taskActionsCreators;
    fetchListTask();
  }

  const { classes, listTask } = props;
  // console.log(props);
  const renderBoard = <RenderBoard listTask={listTask} />;
  const renderForm = <TaskForm loadData={loadData} />;

  useEffect(() => {
    // const { taskActionsCreators } = props;
    // const { fetchListTask } = taskActionsCreators;
    // fetchListTask();
  }, []);

  return (
    <div className={classes.taskBoard}>
      {renderForm}
      {renderBoard}
    </div>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};
const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TaskBoard),
);
