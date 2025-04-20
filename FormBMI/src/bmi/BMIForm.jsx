import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, calculateBMI } from './bmiSlice';
import './BMIForm.css';

const BMIForm = () => {
  const { height, weight, bmi } = useSelector((state) => state.bmi);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateBMI());
  };

  return (
    <div className="bmi-container">
      <h2>Tính chỉ số BMI</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleChange}
          placeholder="Chiều cao (cm)"
        />
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleChange}
          placeholder="Cân nặng (kg)"
        />
        <button type="submit">Tính BMI</button>
      </form>
      {bmi && (
        <p className="result">
          Chỉ số BMI của bạn là: <strong>{bmi}</strong>
        </p>
      )}
    </div>
  );
};

export default BMIForm;
