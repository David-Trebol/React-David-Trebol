import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button 
          onClick={handleDecrease} 
          disabled={count <= 1}
          className="count-button"
        >
          -
        </button>
        <span className="count-display">{count}</span>
        <button 
          onClick={handleIncrease} 
          disabled={count >= stock}
          className="count-button"
        >
          +
        </button>
      </div>
      
      <button 
        className="add-to-cart-button"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount; 