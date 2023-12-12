// components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Actions/Actions';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const totalUniqueProducts = useSelector((state) => state.cart?.cartItems.length || 0);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) =>
    state.cart?.cartItems.reduce((total, item) => total + item.quantity, 0) || 0
  );

  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Unique Products: {totalUniqueProducts}</p>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${(totalPrice).toFixed(2)}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              {item.name} - Quantity: {item.quantity} - {item.price} - Total Price: {item.totalPrice.toFixed(2)}
              <button onClick={() => handleIncrementQuantity(item.id)}>Increment</button>
              <button onClick={() => handleDecrementQuantity(item.id)}>Decrement</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
