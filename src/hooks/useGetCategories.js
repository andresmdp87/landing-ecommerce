import { useState, useEffect } from 'react'
import { collection, getDocs} from "firebase/firestore"
import { db } from "../services/firebase"

export function useGetCategories() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
   
      useEffect(()=>{
          setLoading(true)
          const catCollection = collection(db, "categorias")
          getDocs(catCollection)
          .then((res)=>{
              console.log(res.docs)
              const list = res.docs.map((doc)=>{
                  return{
                      id:doc.id,
                      ...doc.data()
                  }
              })
              console.log(list)
              setCategories(list)
          })
          .catch((error)=>{
              console.log(error)
          })
          .finally(()=> setLoading(false))
      }, [])
  
      return {categories, loading}
}