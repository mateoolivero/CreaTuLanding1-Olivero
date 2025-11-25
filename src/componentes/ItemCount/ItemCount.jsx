import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [qty, setQty] = useState(initial);

  const inc = () => qty < stock && setQty(qty + 1);
  const dec = () => qty > 1 && setQty(qty - 1);

  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{qty}</span>
      <button onClick={inc}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;