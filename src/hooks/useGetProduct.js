import { useState, useEffect } from 'react'
import local_products from "../data/products.json"

export function useGetProduct(productId) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = () => {
            const product = local_products.find(product=>product.id===Number(productId))
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(product);
                }, 1000);
            })
            
            return promise;
        };

        setLoading(true);

        getProduct()
            .then((response) => setProduct(response))
            .catch(() => console.log("Error al cargar el producto"))
            .finally(() => setLoading(false))
    }, [productId]);


    return {product, loading}
}