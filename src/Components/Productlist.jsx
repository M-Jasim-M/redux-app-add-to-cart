// components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions/Actions';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li>
          Product 1  price: 200$<button onClick={() => handleAddToCart({ id: 1, name: 'Product 1',price:"300$" })}>Add to Cart</button>
        </li>
        <li>
          Product 2  price: 200$<button onClick={() => handleAddToCart({ id: 2, name: 'Product 2',price:"300$" })}>Add to Cart</button>
        </li>
        {/* Add more products as needed */}
      </ul>
    </div>
  );
};

export default ProductList;
