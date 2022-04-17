import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import React, { useReducer, useRef } from "react";
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();
const reducer = (state, action) => {
  let newItem = [];
  switch (action.type) {
    case "ADD": {
      const newCart = {
        ...action.basket,
      };
      newItem = [newCart, ...state];
      break;
    }
    default:
      return state;
  }
  return newItem;
};
const dummy = [
  {
    id: "1",
    title:
      "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
    price: 11.96,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg",
  },
  {
    id: "2",
    title:
      "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
    price: 239,
    rating: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg",
  },
  {
    id: "3",
    title:
      "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
    price: 28,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg",
  },
];
const App = () => {
  const [basket, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  const onAdd = (title, price, rating, image) => {
    dispatch({
      type: "ADD",
      basket: {
        id: dataId.current,
        title,
        price,
        rating,
        image,
      },
    });
    dataId.current += 1;
  };
  return (
    <StateContext.Provider value={{ basket, dummy }}>
      <DispatchContext.Provider value={{ onAdd }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
