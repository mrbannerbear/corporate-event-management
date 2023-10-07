import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/home/Home";
import MainLayout from "../src/components/mainLayout/MainLayout";
import Error from "../src/components/mainLayout/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
])