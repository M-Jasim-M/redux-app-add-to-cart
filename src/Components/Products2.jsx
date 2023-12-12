
// components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions/Actions';

const ProductList2 = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li>
          Product 3 price: 200$ <button onClick={() => handleAddToCart({ id: 3, name: 'Product 3',price:"350$" })}>Add to Cart</button>
        </li>
        <li>
          Product 4  price: 200$<button onClick={() => handleAddToCart({ id: 4, name: 'Product 4',price:"350$" })}>Add to Cart</button>
        </li>
        {/* Add more products as needed */}
      </ul>
    </div>
  );
};

export default ProductList2;
