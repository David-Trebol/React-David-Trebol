import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="no-products">No hay productos disponibles</p>;
  }

  return (
    <div className="item-list">
      {products.map(product => (
        <Item 
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          stock={product.stock}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ItemList; 