import Card from "../Card/Card"
import { Link } from "react-router-dom"
import styles from "./ProductItem.module.css"

const ProductItem = ({ product }) => {
    return (
        <div className={styles.container}>
            <Link to={`/product/${product.id}`}>
                <Card>
                    <p>{product.title}</p>
                    <img src={product.mainImage} width={200} height={100} /> 
                    <p>${product.price}</p>
                </Card>
            </Link>
        </div>
    )
}

export default ProductItem