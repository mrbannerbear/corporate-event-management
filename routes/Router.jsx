import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/home/Home";
import MainLayout from "../src/components/mainLayout/MainLayout";
import Error from "../src/components/mainLayout/Error";
import EachService from "../src/components/EachService/EachService";
import AboutUs from "../src/components/AboutUs/AboutUs";
import ServicesRoute from "../src/components/ServicesRoute/ServicesRoute";
import Account from "../src/components/Account/Account";
import Plans from "../src/components/Plans/Plans";
import Register from "../src/auth/register/Register";
import Login from "../src/auth/login/Login";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services/:id",
                element: <PrivateRoutes><EachService></EachService></PrivateRoutes>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/services",
                element: <ServicesRoute></ServicesRoute>
            },
            {
                path: "/account",
                element: <PrivateRoutes><Account></Account></PrivateRoutes>
            },
            {
                path: "/plans",
                element: <PrivateRoutes><Plans></Plans></PrivateRoutes>
            },
            {
                path: "/registration",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
])