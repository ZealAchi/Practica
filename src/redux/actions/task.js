import * as taskApis from 'apis/task';
import * as taskConstants from 'Constants2/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
// B1 fetchLKistTaskRequest()
// B2 reset: state task[]
export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then(resp => {
//         const { data } = resp;
//         dispatch(fetchListSuccess(data));
//       })
//       .catch(error => {
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };
