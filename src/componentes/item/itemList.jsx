import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="product-grid">
      {items.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ItemList;