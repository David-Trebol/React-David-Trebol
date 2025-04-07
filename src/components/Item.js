import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, price, image, description, stock }) => {
  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `€${price.toFixed(2)}`;
    }
    return '€0.00';
  };

  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h3>{name}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">{formatPrice(price)}</p>
        <p className="item-stock">Stock disponible: {stock}</p>
        <Link to={`/item/${id}`} className="item-button">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item; 