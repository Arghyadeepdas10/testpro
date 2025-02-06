import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import List from './components/List'
import Cart from './components/Cart'
import Login from './Auth/Login'
import { PrivateRouter } from './Utils/PrivateRouter'
import { Theme } from './Theme/Theme'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

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
              <Navigate to="/list" />
            </SignedIn>
          ),
        },
        // {
        //   index: true, 
        //   element: <Navigate to="/login" />, 
        // },
        {
          path:"/login",
          // element:<Login/>
          element: (
            <SignedOut>
              <Login />
            </SignedOut>
          ),
        },
        {
          element: (
            <SignedIn>
              <PrivateRouter />
            </SignedIn>
          ),
          // element:<PrivateRouter/>,
          children:[
            {
              path:"/list",
              element: <List/>
            },
            {
              path:"/cart",
              element: <Cart/>
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
