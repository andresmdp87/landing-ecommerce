import { Link } from 'react-router-dom'
import styles from './EmptyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>🛒💤</div>

        <h2 className={styles.title}>Tu carrito está vacío</h2>

        <p className={styles.subtitle}>
          ¡Explorá nuestros productos y descubrí nuevas ofertas!
        </p>

        <Link to='/' className={styles.homeBtn}>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart
