import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import styles from './ProductDetail.module.css'

const ProductDetail = ({ product }) => {
  const { addToCart, itemQuantity } = useContext(CartContext)
  const [purchase, setPurchase] = useState(false)

  const onAdd = (cantidad) => {
    addToCart(product, cantidad)
    setPurchase(true)
    Swal.fire({
      position: 'bottom',
      icon: 'success',
      title: `Agregaste ${product.title} al carrito`,
      showConfirmButton: false,
      timer: 2000
    })
  }

  const stockActualizado = product.stock - itemQuantity(product.id)

  return (
    <div className={styles.detailContainer}>
      
      <img
        src={product.mainImage}
        alt={product.title}
        className={styles.productImage}
      />

      <div className={styles.detailInfo}>

        <div>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.longDescription}</p>
          <p className={styles.price}>$ {product.price}</p>
          <p className={styles.stock}>Stock disponible: {stockActualizado} unidades</p>
        </div>

        <div className={styles.actionArea}>
          {purchase ? (
            <Link to='/cart' className={styles.goCart}>Ir al carrito</Link>
          ) : (
            <ItemCount stock={stockActualizado} onAdd={onAdd} />
          )}
        </div>

      </div>

    </div>
  )
}

export default ProductDetail
