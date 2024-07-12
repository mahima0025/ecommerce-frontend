import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
