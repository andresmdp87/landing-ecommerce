import { useState, useEffect } from 'react'
import { doc, getDoc} from "firebase/firestore"
import { db } from "../services/firebase"

export function useGetProduct(productId) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        const docRef = doc(db, "productos", productId)
        getDoc(docRef)
        .then((res)=> {
            if(res.data()){
                setProduct({ id: res.id, ...res.data()})
            }else{
                setInvalid(true)    
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [productId])

    return {product, loading, invalid}
}