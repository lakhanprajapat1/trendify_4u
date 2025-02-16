import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Products />
      <Cart />  
    </div>
  );
}

export default App;
