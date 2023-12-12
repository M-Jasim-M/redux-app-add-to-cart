// components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Actions/Actions';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const totalUniqueProducts = useSelector((state) => state.cart?.cartItems.length || 0);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) =>
    state.cart?.cartItems.reduce((total, item) => total + item.quantity, 0) || 0
  );
  const totalPrice = useSelector((state) => state.cart?.totalPrice || 0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Unique Products: {totalUniqueProducts}</p>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${(totalPrice * totalQuantity).toFixed(2)}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              {item.name} - Quantity: {item.quantity} - {item.price} - Total Price: {item.totalPrice?.toFixed(2) || 'N/A'}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
