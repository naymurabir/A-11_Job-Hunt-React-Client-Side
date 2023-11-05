import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Blogs from "../Pages/Blogs/Blogs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LoginPage></LoginPage>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addJob',
            element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
        },
        {
            path: '/allJobs',
            element: <AllJobs></AllJobs>
        },
        {
            path: '/appliedJobs',
            element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
        },
        {
            path: '/myJobs',
            element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
        }
    ]
}])

export default router