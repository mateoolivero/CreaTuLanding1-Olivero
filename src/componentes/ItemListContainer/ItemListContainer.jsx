import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosByCategoria } from "../../data/productos";
import ItemList from "../item/itemList";

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoriaId) {
      getProductosByCategoria(categoriaId).then(setItems);
    } else {
      getProductos().then(setItems);
    }
  }, [categoriaId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;