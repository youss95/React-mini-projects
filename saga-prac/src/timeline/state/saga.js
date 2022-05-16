import { all, call, put, take, fork } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../common/api";
export function* fetchData(action) {
  while (true) {
    const { timeline } = yield take(types.REQUEST_LIKE); //take: 인수로 전달된 액션 타입을 기다린다.
    yield put(actions.setLoading(true)); //put: 새로운 액션을 발생
    yield put(actions.addLike(timeline.id, 1));
    yield call(callApiLike); //call: 입력된 함수를 대신 호출 만약 프로미스를 반환해도 프로미스가 처리될때까지 기다린다
    yield put(actions.setLoading(false));
  }
}

export default function* watcher() {
  yield all([fork(fetchData)]);
}
