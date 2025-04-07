import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  return (
    <article className="item-detail">
      <div className="item-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p className="category">{product.category}</p>
        <p className="price">€{product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        {/* Renderizado condicional del contador o botones de finalización */}
        {
          quantityAdded === 0 ? (
            <ItemCount 
              initial={1} 
              stock={product.stock} 
              onAdd={handleOnAdd} 
            />
          ) : (
            <div className="checkout-options">
              <Link to='/cart' className="finish-button">
                Terminar compra
              </Link>
              <Link to='/' className="continue-button">
                Seguir comprando
              </Link>
            </div>
          )
        }
      </div>
    </article>
  );
};

export default ItemDetail; 