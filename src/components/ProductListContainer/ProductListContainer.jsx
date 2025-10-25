import { useGetProducts } from "../../hooks/useGetProducts"
import ProductItem from "../ProductItem/ProductItem"
import { useParams } from "react-router-dom"
import loadingGif from "../../assets/loading.gif"
import styles from "./ProductListContainer.module.css"

const ProductListContainer = () => {
    const { categoryId } = useParams()
    const { products, loading } = useGetProducts(categoryId)

    if (loading) return <img src={loadingGif} alt="Cargando" width={30} height={30} /> 
    return (
        <div className={styles.container}>
            {
                products.map((product, index) => <ProductItem key={index} product={product} />)
            }
        </div>
    )
}

export default ProductListContainer