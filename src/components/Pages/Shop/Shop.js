import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import ShopCard from '../../Templates/ShopCard/ShopCard';
import './Shop.css';

export default function Shop() {
  const products = useLoaderData();
  const { handleAddProductToCart } = useOutletContext();
  return (
    <div className="shop">
      {products.map((product) => (
        <ShopCard
          product={product}
          key={product.id}
          handleAddProductToCart={handleAddProductToCart}
        />
      ))}
    </div>
  );
}

export const shopLoader = async () => {
  const res = await fetch('http://localhost:4000/products');

  if (!res.ok) {
    throw Error('Could not fetch the products');
  }

  return res.json();
};
