// actions/cartActions.js
export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  

  // actions/cartActions.js
export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  
  export const incrementQuantity = (productId) => ({
    type: 'INCREMENT_QUANTITY',
    payload: productId,
  });
  
  export const decrementQuantity = (productId) => ({
    type: 'DECREMENT_QUANTITY',
    payload: productId,
  });
  