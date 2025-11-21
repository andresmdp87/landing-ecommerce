import styles from "./NavBar.module.css"
import logo from "./reactMarket.png"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt="Carrito" className={styles.logo} />
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            CATEGORIAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            CONTACTO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cupones"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            CUPONES
          </NavLink>
        </li>
      </ul>

      <NavLink to="/cart" className={styles.cartBtn}>
        <CartWidget />
      </NavLink>
    </nav>
  )
}

export default NavBar
