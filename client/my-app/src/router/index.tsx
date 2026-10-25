import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/auth/layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import App from "../App";
import AdminLayout from "../components/admin-view/layout";
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import ShoppingLayout from "../components/shopping-view/layout";
import NotFound from "../pages/not-found";
import ShopHome from "../pages/shopping/ShopHome";
import ShopList from "../pages/shopping/ShopList";
import ShopCheckout from "../pages/shopping/ShopCheckout";
import ShopAccount from "../pages/shopping/ShopAccount";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Register />,
          },
        ],
      },
    ],
  },
  // Admin Layout
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
  // shopping Layout
  {
    path: "/shop",
    element: <ShoppingLayout />,
    children: [
      {
        path: "home",
        element: <ShopHome />,
      },

      {
        path: "listing",
        element: <ShopList />,
      },
      {
        path: "checkout",
        element: <ShopCheckout />,
      },
      {
        path: "account",
        element: <ShopAccount />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);