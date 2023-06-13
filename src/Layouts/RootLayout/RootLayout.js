import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './RootLayout.css';

function RootLayout() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleAddProductToCart = (product) => {
    const ProductAlreadyInCart = shoppingCart.find(
      (item) => item.id === product.id
    );
    if (ProductAlreadyInCart) {
      setShoppingCart(
        shoppingCart.map((item) =>
          item.id === product.id
            ? { ...ProductAlreadyInCart, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setShoppingCart([...shoppingCart, { ...product, quantity: 1 }]);
    }
    console.log({ shoppingCart });
  };

  const handleSubtractItemFromCart = (product) => {
    if (product.quantity == 1) {
      setShoppingCart(shoppingCart.filter((item) => item.id !== product.id));
    } else {
      setShoppingCart(
        shoppingCart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: product.quantity - 1 }
            : item
        )
      );
    }
    console.log({ shoppingCart });
  };

  return (
    <div id="header">
      <header>
        <nav>
          <h1>ShopName</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">
            Cart<sup>{shoppingCart.length > 0 ? shoppingCart.length : ''}</sup>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet
          context={{
            handleSubtractItemFromCart,
            handleAddProductToCart,
            shoppingCart,
          }}
        />
      </main>
    </div>
  );
}

export default RootLayout;
