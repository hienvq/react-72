import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom";
import Error from "../components/Error";
import UserList from "../components/UserList";
import ProductList from "../components/ProductList";
// import Home from "../components/Home";
// import About from "../components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ul>
        <li>
          <NavLink to={"/user"}>User</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <Outlet />
      </ul>
    ),
    errorElement: <Error />,
    children: [
      // {
      //   path: "user",
      //   element: <UserList />,
      // },
      // {
      //   path: "product",
      //   element: <ProductList />,
      // },
    ],
  },
]);

//CRUD = Create + Read + Update + Delete = POST + GET + PUT/PATCH + DELETE
