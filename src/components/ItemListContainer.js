import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/products';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(items => {
        if (categoryId) {
          const filteredProducts = items.filter(
            product => product.category === categoryId
          );
          setProducts(filteredProducts);
        } else {
          setProducts(items);
        }
      })
      .catch(error => {
        setError('Error al cargar los productos');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>No hay productos disponibles en esta categoría</p>
      )}
    </div>
  );
};

export default ItemListContainer; 