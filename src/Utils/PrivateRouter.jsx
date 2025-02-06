// import { useSelector } from "react-redux"
// import { Navigate, Outlet } from "react-router-dom";

// export const PrivateRouter = ()=>{

//     const {isloggedin} = useSelector((state)=>state.auth);

//     return isloggedin ? <Outlet/> : <Navigate to = "/login"/>


// }

import { RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';

export const PrivateRouter = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
};
