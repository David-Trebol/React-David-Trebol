import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const products = [
    {
        name: "MacBook Pro M2",
        price: 1299.99,
        category: "laptops",
        description: "MacBook Pro con chip M2, 13 pulgadas, 8GB RAM, 256GB SSD",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        stock: 8
    },
    {
        name: "iPhone 14 Pro",
        price: 999.99,
        category: "smartphones",
        description: "iPhone 14 Pro 256GB, Cámara triple, 5G",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
        stock: 20
    },
    {
        name: "AirPods Pro",
        price: 249.99,
        category: "accesorios",
        description: "AirPods Pro 2da generación, Cancelación de ruido",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500",
        stock: 25
    }
    // Añade más productos aquí si lo deseas
];

export const uploadProducts = async () => {
    try {
        for (const product of products) {
            const docRef = await addDoc(collection(db, 'products'), product);
            console.log('Producto agregado con ID:', docRef.id);
        }
        console.log('Todos los productos fueron agregados exitosamente');
    } catch (error) {
        console.error('Error al subir productos:', error);
    }
}; 