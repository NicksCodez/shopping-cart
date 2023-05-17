import React from 'react';
import './Header.css';

function Header() {
  return (
    <div id="header">
      <div>
        <button type="button">ShopName</button>
      </div>
      <div>
        <button type="button">Home</button>
        <button type="button">Shop</button>
        <button type="button">Cart</button>
      </div>
    </div>
  );
}

export default Header;
