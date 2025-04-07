import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { products } from '../data/products';

export const uploadProducts = async () => {
  try {
    const productsRef = collection(db, 'products');
    
    for (const product of products) {
      await addDoc(productsRef, product);
      console.log(`Producto ${product.name} agregado`);
    }
    
    console.log('Todos los productos fueron agregados');
  } catch (error) {
    console.error("Error:", error);
  }
}; 