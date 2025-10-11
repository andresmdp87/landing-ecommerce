import { useState, useEffect } from 'react'
import local_categories from '../data/categories.json'

export function useGetCategories() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCategories = () => {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(local_categories);
                }, 1000);
            });

            return promise;
        };

        setLoading(true);

        getCategories()
            .then((response) => setCategories(response))
            .catch(() => console.log("Error al cargar las categorías"))
            .finally(() => setLoading(false))
    }, [])


    return {categories,loading}
}