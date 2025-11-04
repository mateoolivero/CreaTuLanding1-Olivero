import "./CarritoWidget.css"

export const CartWidget = () => {

    const ImgCarrito= "https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-trolley-600nw-2477792119.jpg"

  return (
    <div>
        <img className="ImgCarrito" src={ImgCarrito}></img>
        <strong>0</strong>
    </div>
  )
}

export default CartWidget