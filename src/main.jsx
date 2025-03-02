import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/HomeElement/Home.jsx'
import Mens from './Component/HomeElement/Mens.jsx'
import Womens from './Component/HomeElement/Womens.jsx'
import Signup from './Component/form/signup.jsx'
import Login from './Component/form/Login.jsx'
import Detail from './Component/All-Projucts/Detail.jsx'
import { store } from './Component/Store/Store.js'
import { Provider } from 'react-redux'
import Cart from './Component/All-Projucts/Cart.jsx'

const routeer = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/Home"} /> },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "Mens",
        element: <Mens />,
      },
      {
        path: "/Womens",
        element: <Womens />
      },
      {
        path: "Detail/:id",
        element: <Detail />
      },
      {
        path :"/Cart",
        element : <Cart/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <RouterProvider router={routeer} />
  </Provider>,



)
