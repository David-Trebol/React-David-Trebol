export const products = [
  {
    id: 1,
    name: "Laptop HP Pavilion",
    price: 899.99,
    category: "laptops",
    stock: 10,
    description: "Laptop HP Pavilion 15.6 pulgadas",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 999.99,
    category: "smartphones",
    stock: 15,
    description: "iPhone 13 128GB",
    image: "https://via.placeholder.com/200"
  },
  // Agrega más productos según necesites
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
}; 