import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import EmptyCart from '../EmptyCart/EmptyCart'
import CartView from '../CartView/CartView'

const CartContainer = () => {
    const {cart}= useContext(CartContext)
  return (
    <div>
        { !cart.length ? <EmptyCart/> : <CartView/>  }
    </div>
  )
}

export default CartContainer