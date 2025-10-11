import { useGetCategories } from "../../hooks/useGetCategories"
import CategoryItem from "../CategoryItem/CategoryItem"
import loadingGif from "../../assets/loading.gif"

const CategoriesListContainer = () => {
    const { categories, loading } = useGetCategories()
    if (loading) return <img src={loadingGif} alt="Cargando" width={30} height={30} /> 
    return (
        <div>
            {
                categories.map((category, index) => <CategoryItem key={index} category={category} />)
            }
        </div>
    )
}

export default CategoriesListContainer