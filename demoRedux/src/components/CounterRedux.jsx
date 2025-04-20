// CounterRedux.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './redux/counterReducer';

function CounterRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>Redux Counter: {count}</h2>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
    </div>
  );
}

export default CounterRedux;
