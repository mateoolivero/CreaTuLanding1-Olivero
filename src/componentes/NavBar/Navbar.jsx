import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"

export const Navbar = () => {


  return (
    <header>
      <h1>Antici</h1>
      <ul>
        <li>Remeras</li>
        <li>Pantalones</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget/>
    </header>
  )
}
