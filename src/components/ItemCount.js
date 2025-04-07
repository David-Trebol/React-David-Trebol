import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
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
        className="add-cart-button"
        onClick={() => onAdd(count)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>

      <div className="stock-info">
        Stock disponible: {stock}
      </div>
    </div>
  );
};

export default ItemCount; 