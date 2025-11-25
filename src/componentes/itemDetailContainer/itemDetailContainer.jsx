import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductosById } from "../../data/productos";
import ItemDetail from "../item/itemdetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductosById(id).then(setItem);
  }, [id]);

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;