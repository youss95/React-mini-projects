import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter); // state.counter.counter :  counterSlice.reducer의 initialState의 counter

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    console.log("de");
    dispatch(counterActions.decrement());
  };

  const increase = () => {
    dispatch(counterActions.increase(10)); //{type: 'something' , payload: 10}
  };

  const showCount = () => {
    dispatch(counterActions.toggle());
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
