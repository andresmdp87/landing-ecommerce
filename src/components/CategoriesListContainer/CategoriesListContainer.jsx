import { useGetCategories } from "../../hooks/useGetCategories"
import CategoryItem from "../CategoryItem/CategoryItem"
import loadingGif from "../../assets/loading.gif"
import styles from './CategoriesListContainer.module.css'

const CategoriesListContainer = () => {
    const { categories, loading } = useGetCategories()
     if (loading) {
            return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <img src={loadingGif} alt="Cargando" width={30} height={30} />
            </div>
            )
        }
    return (
        <div className={styles.container}>
            {
                categories.map((category, index) => <CategoryItem key={index} category={category} />)
            }
        </div>
    )
}

export default CategoriesListContainer