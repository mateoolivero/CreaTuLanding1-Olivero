import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, margin: 10 }}>
      <h2>{item.titulo}</h2>
      <p>Categoría: {item.categoria}</p>
      <p>Precio: ${item.precio}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;