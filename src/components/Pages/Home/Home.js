import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <NavLink to="/shop"> Start Shopping </NavLink>
    </div>
  );
}
