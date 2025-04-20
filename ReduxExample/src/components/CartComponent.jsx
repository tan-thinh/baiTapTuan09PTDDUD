import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';
import '../App.css';

const CartComponent = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="cart-item">
            <div>
              <strong>{item.name}</strong> - ${item.price}
            </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
