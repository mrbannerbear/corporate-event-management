import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/home/Home";
import MainLayout from "../src/components/mainLayout/MainLayout";
import Error from "../src/components/mainLayout/Error";
import EachService from "../src/components/EachService/EachService";
import AboutUs from "../src/components/AboutUs/AboutUs";
import ServicesRoute from "../src/components/ServicesRoute/ServicesRoute";

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
                element: <EachService></EachService>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/services",
                element: <ServicesRoute></ServicesRoute>
            }
        ]
    },
])