import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  // Este número será dinámico más adelante
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget; 