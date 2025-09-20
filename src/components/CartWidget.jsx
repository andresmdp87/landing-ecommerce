import carritoImg from "../carrito.png";

const CartWidget = () => {
    return (
         <div style={{ marginLeft: "20px", marginRight: "20px" }}> 
            <img src={carritoImg} alt="Carrito" width={30} height={30} />
        </div>
    )
}

export default CartWidget