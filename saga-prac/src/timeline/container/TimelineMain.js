import { useEffect, useReducer } from "react";
import store from "../../common/store";
import TimelineList from "../component/TimelineList";
import { actions, addTimeline } from "../state/index";
import { getNextTimeline } from "../../common/mockData";
import { useSelector, useDispatch } from "react-redux";
export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    console.log(id);
    const timeline = timelines.find((item) => item.id === id);
    console.log(timeline);
    dispatch(actions.requestLike(timeline)); //action 발생
  }
  return (
    <div>
      <button onClick={onAdd}>timeline add</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {!!isLoading && <p>전송중 ....</p>}
    </div>
  );
}
