import { createStore, combineReducers, applyMiddleware } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
import createSagaMiddleware from "redux-saga";
import timelineSaga from "../timeline/state/saga";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const sagaMiddleware = createSagaMiddleware(); //사가 미들웨어 함수 만들고
const store = createStore(reducer, applyMiddleware(sagaMiddleware)); //스토어 생성할때 입력
export default store;
sagaMiddleware.run(timelineSaga); //saga 실행
