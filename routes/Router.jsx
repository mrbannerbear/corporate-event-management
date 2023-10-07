import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    }
])