import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from '../EmptyCart/EmptyCart'
import { useForm } from 'react-hook-form'
import styles from "./Checkout.module.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, total, removeList } = useContext(CartContext)

    const completePurchase = (dataForm) => {
        setLoading(true)

        const order = {
            comprador: {
                name: dataForm.name,
                lastname: dataForm.lastname,
                email: dataForm.email,
                address: dataForm.address
            },
            compras: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const ventas = collection(db, "ordenes")

        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                removeList()
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }

    if (!cart.length && !orderId) return <EmptyCart />

    return (
        <>
            {orderId ? (
                <div className={styles.successBox}>
                    <h2 className={styles.successTitle}>¡Compra realizada con éxito! 🛒</h2>
                    <p className={styles.orderId}>Código de seguimiento: {orderId}</p>
                    <Link to="/" className={styles.homeBtn}>Volver al Home</Link>
                </div>
            ) : (
                <div className={styles.checkoutWrapper}>
                    <h1 className={styles.title}>Complete sus datos</h1>

                    <form className={styles.form} onSubmit={handleSubmit(completePurchase)}>

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Nombre"
                            {...register("name", { required: true, minLength: 3 })}
                        />
                        {errors?.name && <span className={styles.errorText}>Mínimo 3 caracteres</span>}

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Apellido"
                            {...register("lastname", { required: true, minLength: 2 })}
                        />
                        {errors?.lastname && <span className={styles.errorText}>Mínimo 2 caracteres</span>}

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Dirección"
                            {...register("address", { required: true, minLength: 10, maxLength: 35 })}
                        />
                        {errors?.address && <span className={styles.errorText}>Dirección inválida</span>}

                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Correo"
                            {...register("email", { required: true })}
                        />
                        {errors?.email && <span className={styles.errorText}>Ingrese un correo válido</span>}

                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Repita su correo"
                            {...register("secondmail", {
                                required: true,
                                validate: { equalsMails: v => v === getValues().email }
                            })}
                        />
                        {errors?.secondmail?.type === "equalsMails" && (
                            <span className={styles.errorText}>Los correos deben coincidir</span>
                        )}

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={loading}
                        >
                            {loading ? "Procesando compra..." : "Completar Compra"}
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Checkout
