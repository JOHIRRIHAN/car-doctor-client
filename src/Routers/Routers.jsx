import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ServicePage from "../ServicePage/ServicePage";
import About from "../Pages/About/About";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CardDetails from "../Pages/CardDetails/CardDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/service',
            element: <ServicePage></ServicePage>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: "/serviceDetails/:id",
            element: <ServiceDetails />,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: "/checkout/:id",
            element: <CheckOut />,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: "/carddetails",
            element: <CardDetails />,
            // loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        
      ]
    },
  ]);
export default router;