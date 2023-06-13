import React from 'react';
import './ShopCard.css';
import Images from '../../../helpers/ImageImports.js';

export default function ShopCard(props) {
  const {
    product: { id, name, price },
    product,
    handleAddProductToCart,
  } = props;

  return (
    <div className="shop-card">
      <div className="shop-card-image">
        <img src={Images[id]} />
      </div>
      <div className="shop-card-name">{name}</div>
      <div className="shop-card-bottom">
        <div className="shop-card-price">Price: {price}</div>
        <button onClick={() => handleAddProductToCart(product)}>Buy</button>
      </div>
    </div>
  );
}
