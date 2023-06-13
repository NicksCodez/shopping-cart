import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Images from '../../../helpers/ImageImports.js';
import './Cart.css';

export default function Shop() {
  const { shoppingCart, handleAddProductToCart, handleSubtractItemFromCart } =
    useOutletContext();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {shoppingCart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={Images[item.id]} />
          <div className="cart-item-description">
            <div>{item.name}</div>
            <div>Price: {item.price * item.quantity}</div>
          </div>
          <div className="cart-item-quantity">
            <button onClick={() => handleSubtractItemFromCart(item)}>-</button>
            <div>{item.quantity}</div>
            <button onClick={() => handleAddProductToCart(item)}>+</button>
          </div>
        </div>
      ))}
      <div className="checkout">
        <div>
          Total:
          {shoppingCart.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.price * currentValue.quantity,
            0
          )}
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
