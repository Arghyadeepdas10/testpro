import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import List from './components/List'
import Cart from './components/Cart'
import Login from './Auth/Login'
import { PrivateRouter } from './Utils/PrivateRouter'
import { Theme } from './Theme/Theme'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Header/>,
      children:[
        {
          index: true, 
          element: <Navigate to="/login" />, 
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          element:<PrivateRouter/>,
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
