import { useState, useEffect } from 'react'
import local_products from "../data/products.json"

export function useGetProducts(categoryId) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProductsByCategory = () => {
            const productsFiltered = local_products.filter(product=>product.categoryId===Number(categoryId))

            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productsFiltered);
                }, 1000)
            });

            return promise;            
        };

        setLoading(true);

        getProductsByCategory()
            .then((response) => setProducts(response))
            .catch(() => console.log("Error al cargar los productos"))
            .finally(() => setLoading(false))
    }, []);

    return {products, loading}
}