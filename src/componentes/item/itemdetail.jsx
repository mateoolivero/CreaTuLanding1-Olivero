import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="detail">
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail;