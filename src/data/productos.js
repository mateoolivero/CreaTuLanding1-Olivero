const productos = [
  { id: "1", titulo: "Remera Oversize", categoria: "remeras", precio: 15000 },
  { id: "2", titulo: "Short Cargo", categoria: "shorts", precio: 22000 },
  { id: "3", titulo: "Gorra Classic", categoria: "gorras", precio: 12000 }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 600);
  });
};

export const getProductosByCategory = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(productos.filter(p => p.categoria === categoriaId)),
      600
    );
  });
};

export const getProductosById = (id) => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(productos.find(p => p.id === id)),
      600
    );
  });
};
