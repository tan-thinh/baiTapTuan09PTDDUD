import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, reset, incrementByAmount } from './counterSlice';
import '../Counter.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>🧮 Counter nâng cao</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: '10px' }}>Reset</button>
      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ width: '60px' }}
        />
        <button onClick={() => dispatch(incrementByAmount(step))} style={{ marginLeft: '10px' }}>
          Tăng theo số
        </button>
      </div>
    </div>
  );
};

export default Counter;
