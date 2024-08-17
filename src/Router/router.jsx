import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Register from "../Page/Register";
import Login from "../Page/Login";
import ContactUs from "../Page/ContactUs";
import About from "../Page/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
   
  ]);

  export default router;