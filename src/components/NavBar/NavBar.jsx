import  "./NavBar.css";
import logo from "./reactMarket.png";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Carrito" width={200} height={100} />
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/categories"><li>Categorias</li></NavLink>
                <NavLink to="/contact"><li>Contacto</li></NavLink>
                <NavLink to="/cupones"><li>Cupones</li></NavLink>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar