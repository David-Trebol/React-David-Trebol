import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
        <Link to="/" className="button-primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-category">{item.category}</p>
            </div>
            
            <div className="item-quantity">
              <p>Cantidad: {item.quantity}</p>
            </div>
            
            <div className="item-prices">
              <p className="item-price">€{item.price.toFixed(2)} c/u</p>
              <p className="item-subtotal">
                Subtotal: €{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            
            <button 
              className="remove-button"
              onClick={() => removeItem(item.id)}
              aria-label="Eliminar producto"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-details">
          <h3>Resumen de compra</h3>
          <div className="summary-row">
            <span>Cantidad de productos:</span>
            <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>€{getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-actions">
          <button 
            className="button-clear"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
          <button 
            className="button-checkout"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 