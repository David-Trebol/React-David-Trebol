import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar item al carrito
  const addItem = (item, quantity) => {
    if (!item.stock) {
      console.error('No hay stock disponible');
      return;
    }
    if (quantity > item.stock) {
      console.error('Cantidad excede el stock disponible');
      return;
    }
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      const updatedCart = cart.map(prod => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        }
        return prod;
      });
      setCart(updatedCart);
    }
  };

  // Remover item del carrito
  const removeItem = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  // Limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Verificar si un item está en el carrito
  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  // Obtener cantidad total de items
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener precio total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Obtener cantidad de un item específico
  const getItemQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    return item?.quantity || 0;
  };

  const contextValue = {
    cart,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    getTotalQuantity,
    getTotalPrice,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 