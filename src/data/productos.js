const productos = [
  { id: "1", titulo: "Remera Oversize", categoria: "remeras", precio: 15000 },
  { id: "2", titulo: "Short Cargo", categoria: "shorts", precio: 22000 },
  { id: "3", titulo: "Gorra Classic", categoria: "gorras", precio: 12000 }
];

// 🔹 Obtener todos los productos (ASÍNCRONO)
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 500);
  });
};

// 🔹 Obtener productos por categoría (ASÍNCRONO)
export const getProductosByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(p => p.categoria === categoriaId));
    }, 500);
  });
};

// 🔹 Obtener producto por id (ASÍNCRONO)
export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(p => p.id === id));
    }, 500);
  });
};

export default productos;
