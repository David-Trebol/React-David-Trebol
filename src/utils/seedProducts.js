import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

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
        name: "Lenovo ThinkPad X1",
        price: 1199.99,
        category: "laptops",
        description: "ThinkPad X1 Carbon, Intel Core i7, 16GB RAM, 512GB SSD",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
        stock: 10
    },
    {
        name: "Dell XPS 13",
        price: 999.99,
        category: "laptops",
        description: "Dell XPS 13 con Intel Core i5, 8GB RAM, 256GB SSD",
        image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=500",
        stock: 15
    },
    {
        name: "HP Envy x360",
        price: 899.99,
        category: "laptops",
        description: "HP Envy x360 2-en-1, AMD Ryzen 7, 16GB RAM, 512GB SSD",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500",
        stock: 12
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
        name: "Samsung Galaxy S23",
        price: 899.99,
        category: "smartphones",
        description: "Samsung Galaxy S23 Ultra, 256GB, 108MP cámara",
        image: "https://images.unsplash.com/photo-1678685888425-d847fad37356?w=500",
        stock: 15
    },
    {
        name: "Google Pixel 7",
        price: 699.99,
        category: "smartphones",
        description: "Google Pixel 7 Pro, 128GB, Android 13",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
        stock: 10
    },
    {
        name: "OnePlus 11",
        price: 699.99,
        category: "smartphones",
        description: "OnePlus 11 5G, 256GB, Snapdragon 8 Gen 2",
        image: "https://images.unsplash.com/photo-1678685888425-d847fad37356?w=500",
        stock: 8
    },
    {
        name: "AirPods Pro",
        price: 249.99,
        category: "accesorios",
        description: "AirPods Pro 2da generación, Cancelación de ruido",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500",
        stock: 25
    },
    {
        name: "Samsung Galaxy Watch 5",
        price: 279.99,
        category: "accesorios",
        description: "Galaxy Watch 5 Pro, GPS, Bluetooth",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
        stock: 18
    },
    {
        name: "iPad Air",
        price: 599.99,
        category: "tablets",
        description: "iPad Air 5ta gen, 64GB, WiFi",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        stock: 15
    },
    {
        name: "Samsung Galaxy Tab S8",
        price: 649.99,
        category: "tablets",
        description: "Galaxy Tab S8, 128GB, S Pen incluido",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
        stock: 12
    },
    {
        name: "Logitech MX Master 3",
        price: 99.99,
        category: "accesorios",
        description: "Mouse inalámbrico profesional",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        stock: 30
    },
    {
        name: "Monitor LG UltraGear",
        price: 399.99,
        category: "monitores",
        description: "Monitor gaming 27', 144Hz, 1ms",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        stock: 10
    },
    {
        name: "Teclado Keychron K2",
        price: 89.99,
        category: "accesorios",
        description: "Teclado mecánico inalámbrico",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        stock: 20
    },
    {
        name: "Webcam Logitech C920",
        price: 79.99,
        category: "accesorios",
        description: "Webcam HD Pro 1080p",
        image: "https://images.unsplash.com/photo-1587576845026-b2f0c9619e1d?w=500",
        stock: 15
    },
    {
        name: "Monitor Dell UltraSharp",
        price: 499.99,
        category: "monitores",
        description: "Monitor 4K 32', USB-C",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        stock: 8
    },
    {
        name: "Disco SSD Samsung",
        price: 129.99,
        category: "componentes",
        description: "SSD 1TB NVMe M.2",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
        stock: 25
    },
    {
        name: "RAM Corsair Vengeance",
        price: 89.99,
        category: "componentes",
        description: "16GB DDR4 3200MHz",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500",
        stock: 30
    },
    {
        name: "Tarjeta Gráfica RTX 3060",
        price: 329.99,
        category: "componentes",
        description: "NVIDIA RTX 3060 12GB GDDR6",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
        stock: 5
    }
];

export const seedProducts = async () => {
    try {
        const productsRef = collection(db, 'products');
        
        for (const product of products) {
            await addDoc(productsRef, product);
            console.log(`Producto ${product.name} agregado correctamente`);
        }
        
        console.log('Todos los productos fueron agregados exitosamente');
    } catch (error) {
        console.error("Error al subir productos:", error);
    }
}; 