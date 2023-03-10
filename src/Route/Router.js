import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Signup/Signup";
import Privateroute from "./Privateroute/Privateroute";
import Checkout from "../Pages/Checkout/Checkout";
import Review from "../Layout/Review/Review";
import Reviewdetail from "../Pages/Reviewdetail/Reviewdetail";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddServices from "../Pages/AddServices/AddServices";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://nokshi-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/reviewdetails',
                element: <Reviewdetail></Reviewdetail>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservices',
                element: <Privateroute><AddServices></AddServices></Privateroute>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);
export default router;