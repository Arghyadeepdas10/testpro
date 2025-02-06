import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const fetchcategories = async(name)=>{
    try {

        const {data} = await axiosinstance.get(endpoints.category,name);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}