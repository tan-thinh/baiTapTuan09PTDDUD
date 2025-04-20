import React from 'react';

const ProductList = ({ addItem }) => {
  const products = [
    { id: 1, name: 'Áo thun', price: 100 },
    { id: 2, name: 'Quần jean', price: 200 },
    { id: 3, name: 'Giày thể thao', price: 300 },
  ];

  return (
    <div>
      <h2>Sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id} className="product-item">
          <span>{p.name} - {p.price}k</span>
          <button onClick={() => addItem(p)}>Thêm</button>
        </div>
      ))}
    </div>
  );
  
};

export default ProductList;
