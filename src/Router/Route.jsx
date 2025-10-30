import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Service from "../Pages/Home/Service/Service";
import Project from "../Pages/Home/Project/Project";
import Price from "../Pages/Home/Price/Price";
import Blog from "../Pages/Home/Blog/Blog";


const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                        path: "/",
                        element: <Home></Home>,
                },
                {
                        path: "/home",
                        element: <Home></Home>,
                },
                {
                        path: "/about",
                        element: <About></About>,
                },
                {
                        path: "/project",
                        element: <Project></Project>,
                },
                
                {
                        path: "/service",
                        element: <Service></Service>,
                },
                {
                        path: "/price",
                        element: <Price></Price>,
                },
                {
                        path: "/blog",
                        element: <Blog></Blog>,
                },
            ]
        }
])

export default router;