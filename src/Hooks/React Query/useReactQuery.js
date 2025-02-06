import { useQuery } from "@tanstack/react-query"
import { fetchproducts } from "../../API/functions/fetchProducts"
import { fetchcategories } from "../../API/functions/fetchcategories"


export const useFetchProductQuery = ()=>{
    return useQuery({
        queryKey: ['product'],
        queryFn: fetchproducts,
    })
}
