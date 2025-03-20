import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);
    console.log('Cantidad agregada:', quantity);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <span className="category-badge">{product.category}</span>
        
        <div className="price-stock">
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="stock">Stock disponible: {product.stock}</p>
        </div>

        <p className="description">{product.description}</p>

        {quantityAdded === 0 ? (
          <ItemCount 
            stock={product.stock} 
            initial={1} 
            onAdd={onAdd}
          />
        ) : (
          <div className="added-to-cart">
            <p>¡Producto agregado al carrito!</p>
            <div className="action-buttons">
              <Link to="/cart" className="go-to-cart">
                Terminar compra
              </Link>
              <Link to="/" className="keep-shopping">
                Seguir comprando
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail; 