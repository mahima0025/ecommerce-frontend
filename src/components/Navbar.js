import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My E-Commerce Site</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
