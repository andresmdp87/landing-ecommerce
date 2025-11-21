import Card from "../Card/Card"
import { Link } from "react-router-dom"
import styles from "./ProductItem.module.css"

const ProductItem = ({ product }) => {
    return (
        <div>
            <Link to={`/product/${product.id}`}>
                <Card>
                   <div className={styles.productCard}>
                        <img className={styles.productCardImg} src={product.mainImage} alt={product.title} width={200} height={100} />

                        <div className={styles.productCardBody}>
                            <div className={styles.productCardTitle}>{product.title}</div>
                            <div className={styles.productCardPrice}>${product.price}</div>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default ProductItem