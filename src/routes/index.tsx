import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import UserList from "../components/UserList";
import LoginPage from "../pages/Login";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import AdminLayout from "../components/AdminLayout";
import ProductList from "../components/ProductList";
// import Home from "../components/Home";
// import About from "../components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>ABC</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "user",
        element: <UserList />,
      },
      {
        path: "product",
        element: <ProductList />,
      },
    ],
  },
]);

//CRUD = Create + Read + Update + Delete = POST + GET + PUT/PATCH + DELETE
