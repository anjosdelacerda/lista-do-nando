import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Activities from "./pages/Activities";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/activities",
        element: <Activities />
    }
])

export default router