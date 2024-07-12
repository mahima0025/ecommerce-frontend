import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import login from './components/login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <login />
    </div>
  );
}

export default App;
