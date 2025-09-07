import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import Products from "../pages/Products";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
        ]
    },
    {
        path: "products/",
        element: <App />,
        children: [
            { path: "", element: <Products /> },
            { path: "favorites", element: <Favorites /> },
            { path: "profile", element: <Profile /> },
        ]
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
