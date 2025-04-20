import React from 'react';

const Cart = ({ cartItems, removeItem, updateQuantity }) => {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} - {item.price}k x
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            style={{ width: '50px' }}
          />
          <button onClick={() => removeItem(item.id)}>Xóa</button>
        </div>
      ))}
      <div className="total">
        Tổng số lượng: {totalQuantity} <br />
        Tổng tiền: {totalPrice}k
      </div>
    </div>
  );
};

export default Cart;
