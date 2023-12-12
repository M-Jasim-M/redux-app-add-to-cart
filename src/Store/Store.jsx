// store/store.js
import { createStore } from 'redux';
import rootReducer from '../Reducers/Rootreducer';

const initialState = {
  cart: {
    cartItems: [],
  },
};

const store = createStore(rootReducer, initialState);

export default store;
