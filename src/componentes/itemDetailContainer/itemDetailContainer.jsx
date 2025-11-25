import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../../data/productos";  

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductoPorId(id).then((producto) => {
      setItem(producto);
    });
  }, [id]);

  if (!item) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{item.titulo}</h1>
      <p>Categoría: {item.categoria}</p>
      <p>Precio: ${item.precio}</p>
    </div>
  );
}

export default ItemDetailContainer;