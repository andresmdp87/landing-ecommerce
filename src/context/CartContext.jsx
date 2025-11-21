import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([])

    const addToCart = (item, qty) => {  
        if(isInCart(item.id)){
            setCart(
                cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            })
            )
        }else{
            setCart([...cart, {...item, quantity:qty}, ])
        }
    }

    const deleteItem = (id) => {	
        setCart(cart.filter((prod)=> prod.id !== id))
    }
 
    const removeList = () => {	
        setCart([])
    }

    const isInCart = (id) => {	
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    const itemQuantity = (id)=>{
        const itemCart = cart.find((prod)=> prod.id === id)

        if(itemCart){
            return itemCart.quantity
        }else{
            return 0
        }
    }

    const total = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price), 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeList, deleteItem, total, itemQuantity, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}