import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/config';

export const getProducts = async () => {
  try {
    const productsRef = collection(db, 'products');
    const querySnapshot = await getDocs(productsRef);
    
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return products;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    const productSnapshot = await getDoc(productRef);
    
    if (!productSnapshot.exists()) {
      throw new Error('Product not found');
    }

    return {
      id: productSnapshot.id,
      ...productSnapshot.data()
    };
  } catch (error) {
    console.error("Error getting product: ", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return products;
  } catch (error) {
    console.error("Error getting products by category: ", error);
    throw error;
  }
}; 