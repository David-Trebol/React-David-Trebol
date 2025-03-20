import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(id)
      .then(productData => {
        setProduct(productData);
      })
      .catch(err => {
        console.error('Error:', err);
        setError('No se pudo cargar el producto. Por favor, intente nuevamente.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="item-detail-container">
        <div className="loading-state">
          <div className="loader"></div>
          <p>Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="item-detail-container">
        <div className="error-state">
          <h2>¡Ups! Algo salió mal</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Intentar nuevamente
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="item-detail-container">
        <div className="not-found-state">
          <h2>Producto no encontrado</h2>
          <p>El producto que estás buscando no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer; 