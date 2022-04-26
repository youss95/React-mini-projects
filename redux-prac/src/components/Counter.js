import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    console.log("in");
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    console.log("de");
    dispatch({ type: "decrement" });
  };

  const increase = () => {
    dispatch({ type: "increase", num: 5 });
  };

  const showCount = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div>
      {counter.showCounter && <h1>{counter.counter}</h1>}
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={increase}>+5</button>
        <button onClick={showCount}>show</button>
      </div>
    </div>
  );
};

export default Counter;
