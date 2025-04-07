import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  
  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-quantity">{getTotalQuantity()}</span>
    </Link>
  );
};

export default CartWidget; 