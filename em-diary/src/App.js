import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyHeader from "./components/MyHeader";
import React, { useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    case "REMOVE":
      newState = state.filter((x) => x.id === action.targetId);
      break;
    case "EDIT":
      newState = state.map((x) =>
        x.id === action.data.id ? { ...action.data } : x
      );
      break;
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
const dummy = [
  {
    id: 1,
    emotion: 1,
    content: "haha",
    date: 1649774375801,
  },
  {
    id: 2,
    emotion: 5,
    content: "ghgh",
    date: 1649774375803,
  },
  {
    id: 3,
    emotion: 2,
    content: "wewewe",
    date: 1749774375802,
  },
  {
    id: 4,
    emotion: 2,
    content: "sadfsd",
    date: 1649774375802,
  },
];
const App = () => {
  const [data, dispatch] = useReducer(reducer, dummy);
  const dataId = useRef(0);
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={(onCreate, onEdit, onRemove)}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
