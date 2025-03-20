import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, price, image, stock, category }) => {
  return (
    <Link to={`/item/${id}`} className="item-card-link">
      <article className="item-card">
        <div className="item-image-container">
          <img src={image} alt={name} className="item-image" />
          {stock <= 5 && stock > 0 && (
            <span className="stock-warning">¡Últimas unidades!</span>
          )}
          {stock === 0 && (
            <span className="stock-warning out-of-stock">Sin stock</span>
          )}
        </div>
        
        <div className="item-info">
          <h3 className="item-name">{name}</h3>
          <span className="item-category">{category}</span>
          <p className="item-price">${price.toFixed(2)}</p>
          
          <div className="item-footer">
            <span className="stock-info">
              Stock: {stock} {stock === 1 ? 'unidad' : 'unidades'}
            </span>
            <button className="view-detail-btn">
              Ver detalle
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Item; 