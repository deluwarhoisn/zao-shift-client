import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PriveteRoute from "./PriveteRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dash/MyParcels/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
 Component: RootLayout,
 children: [
    {
        index: true,
        Component: Home
    },
    {
path: 'rider',
element: <PriveteRoute><Rider></Rider></PriveteRoute>
    },
    {
   path:'send-parcel',
   element: <PriveteRoute><SendParcel></SendParcel></PriveteRoute>,
   loader:() => fetch('/serviceCenter.json').then(res => res.json())
    },
    {
      path:'coverage',
      Component: Coverage,
      loader:() => fetch('/serviceCenter.json').then(res => res.json())
    }
 ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children:[
      {
        path:"login",
        Component: Login,
      },
      {
        path:"register",
        Component: Register,
      },
    ]

  },
  {
    path:'dashboard',
    element: <PriveteRoute><DashboardLayout></DashboardLayout></PriveteRoute>,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels,
      }
    ]
  }
]);