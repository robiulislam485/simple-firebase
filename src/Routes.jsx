import { createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Login from "./Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;