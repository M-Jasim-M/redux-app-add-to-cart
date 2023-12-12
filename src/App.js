// App.js
import React from 'react';
import ProductList from './Components/Productlist';
import ShoppingCart from './Components/Shopingcart';
import ShoppingCart2 from './Components/Third';
import ProductList2 from './Components/Products2';

function App() {
  return (
    <div>
      <ProductList/>
      <ShoppingCart />
      <ProductList2/>
      <ShoppingCart2/>
      </div>
  );
}

export default App;
