import { fork, take, put, call } from 'redux-saga/effects';
import * as taskTypes from 'Constants2/task';
import { getList } from 'apis/task';
import { STATUS_CODE } from 'Constants2';
import { fetchListSuccess, fetchListTaskFailed } from '../redux/actions/task';
// const { STATUS_CODE } = modules;
function* wathFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);

    //   console.log('viendo fetch list task action');
    const resp = yield call(getList);
    const { status, data } = resp;
    console.log('resp:', resp);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
  }
}
function* wathCreateTaskAction() {
  console.log('viendo como se crea la accion tarea');
}

function* rootSaga() {
  yield fork(wathFetchListTaskAction);
  yield fork(wathCreateTaskAction);
}
export default rootSaga;
