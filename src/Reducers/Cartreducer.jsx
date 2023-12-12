// reducers/cartReducer.js
const initialState = {
    cartItems: [],
    totalPrice: 0,
  };
  
  const findProductIndex = (cartItems, productId) => {
    return cartItems.findIndex((item) => item.id === productId);
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const productIndex = findProductIndex(state.cartItems, action.payload.id);
  
        if (productIndex !== -1) {
          // If the product is already in the cart, update the quantity and total price
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[productIndex].quantity += 1;
          updatedCartItems[productIndex].totalPrice += parseFloat(action.payload.price);
  
          return {
            ...state,
            cartItems: updatedCartItems,
            totalPrice: state.totalPrice + parseFloat(action.payload.price),
          };
        } else {
          // If the product is not in the cart, add it
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1, totalPrice: parseFloat(action.payload.price) }],
            totalPrice: state.totalPrice + parseFloat(action.payload.price),
          };
        }
  
      case 'REMOVE_FROM_CART':
        const removedProductIndex = findProductIndex(state.cartItems, action.payload);
        const removedProduct = state.cartItems[removedProductIndex];
  
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
          totalPrice: state.totalPrice - removedProduct.totalPrice,
        };
  
        case 'INCREMENT_QUANTITY':
            const itemToIncrement = state.cartItems.find((item) => item.id === action.payload);
          
            return {
              ...state,
              cartItems: state.cartItems.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + parseFloat(item.price) } : item
              ),
              totalPrice: state.totalPrice + parseFloat(itemToIncrement.price),
            };

            case 'DECREMENT_QUANTITY':
                const itemToDecrement = state.cartItems.find((item) => item.id === action.payload);
              
                return {
                  ...state,
                  cartItems: state.cartItems.map((item) =>
                    item.id === action.payload && item.quantity > 1
                      ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - parseFloat(item.price) }
                      : item
                  ),
                  totalPrice: state.totalPrice - parseFloat(itemToDecrement.price),
              };

      

      default:
        return state;
    }
  };
  
  export default cartReducer;
  