import Card from "../Card/Card"
import { Link } from "react-router-dom"
import  styles  from "./CategoryItem.module.css"

const CategoryItem = ({ category }) => {
    return (
        <Link to={`/products/${category.id}`}>
            <Card>
                <div className={styles.productCard}>
                    <img className={styles.productCardImg} src={category.image} alt={category.title} />

                    <div className={styles.productCardBody}>
                        <div className={styles.productCardTitle}>{category.title}</div>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default CategoryItem