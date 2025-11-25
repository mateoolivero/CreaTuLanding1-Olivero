import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;