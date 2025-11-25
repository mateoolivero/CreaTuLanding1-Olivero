import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/category/remeras">Remeras</NavLink>
      <NavLink to="/category/shorts">Shorts</NavLink>
      <NavLink to="/category/gorras">Gorras</NavLink>
    </nav>
  );
}

export default NavBar;