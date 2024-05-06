import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Page/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Login from './Components/Page/Login';
import Register from './Components/Page/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import AllTouristsSpot from './Components/Page/AllTouristsSpot';
import AddTouristsSpot from './Components/Page/AddTouristsSpot';
import MyList from './Components/Page/MyList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import ErrorPage from './Components/Page/ErrorPage';
import DetailsPage from './Components/Page/DetailsPage';
import Update from './Components/Page/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch ('https://assignment-10-server-sigma-flax.vercel.app/addTouristSpot')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allTouristSpot',
        element:<AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch ('https://assignment-10-server-sigma-flax.vercel.app/addTouristSpot')
      },
      {
        path:'/addTouristsSpot',
        element:<PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path:'/myList',
        element:<PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
      },
      {
        path:'/touristDetails/:id',
        element: <PrivateRoute>
          <DetailsPage></DetailsPage>
        </PrivateRoute>,
        loader: () => fetch ('https://assignment-10-server-sigma-flax.vercel.app/addTouristSpot')
      },
      {
        path:'/update/:id',
        element:<PrivateRoute>
          <Update></Update>
        </PrivateRoute>
      }
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
