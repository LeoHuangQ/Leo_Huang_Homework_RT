import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
} from "../redux/reducer/countReducer";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(increment());
  const handleMinus = () => dispatch(decrement());

  console.log('render the counter');
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={() => dispatch(incrementAsync())}>Add Async</button>
    </div>
  );
}
