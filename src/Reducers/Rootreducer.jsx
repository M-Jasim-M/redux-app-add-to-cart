// reducers/rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './Cartreducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
