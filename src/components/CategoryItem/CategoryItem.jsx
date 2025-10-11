import Card from "../Card/Card"
import { Link } from "react-router-dom"

const CategoryItem = ({ category }) => {
    return (
        <Link to={`/products/${category.id}`}>
            <Card>
                <img src={category.image} alt={category.title} />
                <p>{category.title}</p>
            </Card>
        </Link>
    )
}

export default CategoryItem