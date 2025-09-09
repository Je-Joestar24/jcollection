import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import RequireAuth from "./access/RequireAuth";
import RequireGuest from "./access/RequireGuest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: (<RequireGuest><Home /></RequireGuest>) },
            { path: "about", element: (<RequireGuest><About /></RequireGuest>) },
        ]
    },
    {
        path: "products",
        element: <App />,
        children: [
            { path: "", element: (<RequireAuth><Products /></RequireAuth>) },
            { path: "favorites", element: (<RequireAuth><Favorites /></RequireAuth>) },
            { path: "profile", element: (<RequireAuth><Profile /></RequireAuth>) },
        ]
    }
]);


export default function AppRouter() {
    return <RouterProvider router={router} />;
}
