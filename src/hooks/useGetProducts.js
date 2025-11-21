import { useState, useEffect } from 'react'
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../services/firebase"

export function useGetProducts(categoryId) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        const prodCollection = categoryId 
        ? query(collection(db, "productos"), where("categoryId", "==", Number(categoryId))) 
        : collection(db, "productos")
        getDocs(prodCollection)
        .then((res)=>{
            console.log(res.docs)
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            console.log(list)
            setProducts(list)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=> setLoading(false))
    } ,[categoryId])

    return {products, loading}
}