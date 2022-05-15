import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { addFriend } from "../state";
import { getNextFriend } from "../../common/mockData";
import FriendList from "../component/FriendList";
import { useSelector, useDispatch } from "react-redux";
export default function FriendMain() {
  const friends = useSelector((state) => state.friend.friends);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend(); //데이터 얻어오는거
    dispatch(addFriend(friend)); //액션 함수 실행
  }
  console.log("friendmain redner");

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
