import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = ()=>{

    const {isloggedin} = useSelector((state)=>state.auth);

    return isloggedin ? <Outlet/> : <Navigate to = "/login"/>


}