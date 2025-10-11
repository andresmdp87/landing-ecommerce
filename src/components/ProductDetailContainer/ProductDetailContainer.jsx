import { useGetProduct } from "../../hooks/useGetProduct"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useParams } from "react-router-dom"
import loadingGif from "../../assets/loading.gif"

const ProductDetailContainer = () => {
    const { productId } = useParams()
    const { product, loading } = useGetProduct(productId)

    if (loading) return <img src={loadingGif} alt="Cargando" width={30} height={30} />

    return (
        <ProductDetail product={product} />
    )
}

export default ProductDetailContainer 