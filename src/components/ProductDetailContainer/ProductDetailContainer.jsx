import { useGetProduct } from "../../hooks/useGetProduct"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useParams } from "react-router-dom"
import loadingGif from "../../assets/loading.gif"

const ProductDetailContainer = () => {
    const { productId } = useParams()
    const { product, loading, invalid} = useGetProduct(productId)

    if (invalid){
        return (
           <div>
            <h1>El producto no existe ⚠  </h1>
            <Link to='/'>Volver a Home</Link>
           </div>
        )
    } 

    if (loading) {
        return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <img src={loadingGif} alt="Cargando" width={30} height={30} />
        </div>
        )
    }

    return (
        <ProductDetail product={product} />
    )
}

export default ProductDetailContainer 