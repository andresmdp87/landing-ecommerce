import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import styles from "./CartView.module.css"

const CartView = () => {
    const { cart, deleteItem, removeList, total } = useContext(CartContext)

    const preConfirm = () => {
        Swal.fire({
            icon: 'question',
            title: '¿Seguro querés vaciar el carrito?',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Sí',
        }).then((res) => {
            if (res.isConfirmed) removeList()
        })
    }

    return (
        <div className={styles.cartWrapper}>
            <h1 className={styles.title}>Tu carrito 🛒</h1>

            <div>
                {cart.map((compra) => (
                    <div key={compra.id} className={styles.itemCard}>
                        <img src={compra.mainImage} alt={compra.title} className={styles.productImg} />

                        <div className={styles.itemInfo}>
                            <div className={styles.itemTitle}>{compra.title}</div>
                            <div className={styles.itemPrice}>${compra.price},00</div>
                            <div className={styles.quantity}>Cantidad: {compra.quantity}</div>
                        </div>

                        <div>
                            <div className={styles.itemPrice}>
                                Final: ${compra.price * compra.quantity},00
                            </div>
                        </div>

                        <button
                            className={styles.deleteBtn}
                            onClick={() => deleteItem(compra.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.summary}>
                Total a pagar: ${total()},00
            </div>

            <div className={styles.actions}>
                <button className={styles.clearBtn} onClick={preConfirm}>
                    Vaciar Carrito
                </button>

                <Link className={styles.checkoutBtn} to="/checkout">
                    Terminar compra
                </Link>
            </div>
        </div>
    )
}

export default CartView
