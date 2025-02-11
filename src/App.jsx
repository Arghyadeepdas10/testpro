import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
// import List from './components/List'
// import Cart from './components/Cart'
// import Login from './Auth/Login'
import { PrivateRouter } from './Utils/PrivateRouter'
import { Theme } from './Theme/Theme'
import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/clerk-react";
import { lazy } from 'react'
import { Suspense } from 'react'
import Loader from './UI/Loader'

const List = lazy(() => import('./components/List'));
const Cart = lazy(() => import('./components/Cart'));
const Login = lazy(() => import('./Auth/Login'));

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Header/>,
      children:[
        {
          index: true,
          element: ( 
            <SignedIn>
              <Navigate to="/list"/>
            </SignedIn>
          ),
        },
        {
          path:"/login",
          // element:<Login/>
          element: (
            <SignedOut>
              <Suspense fallback={<div><Loader/></div>}>
                <SignIn />
              </Suspense>
            </SignedOut>
          ),
        },
        {
          element: (
            <SignedIn>
              <PrivateRouter />
            </SignedIn>
          ),
          children:[
            {
              path:"/list",
              element: (
                <Suspense fallback={<div><Loader/></div>}>
                <List />
              </Suspense>
              )
            },
            {
              path:"/cart",
              element: (
                <Suspense fallback={<div><Loader/></div>}>
                <Cart />
              </Suspense>
              )
            }
          ]
        }
      ]
      
    }
  ])

  return (
    <Theme>
    <RouterProvider router={router}/>
    </Theme>
  )
}

export default App
