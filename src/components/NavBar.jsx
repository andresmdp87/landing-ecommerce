import  "./NavBar.css";
import logo from "../reactMarket.png";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Carrito" width={200} height={100} />
            <ul>
                <li>Categorias</li>
                <li>Ofertas</li>
                <li>Cupones</li>
                <li>Moda</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar