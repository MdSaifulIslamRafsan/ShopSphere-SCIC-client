import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Register from "../Page/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  export default router;