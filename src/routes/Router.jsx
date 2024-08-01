import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../pages/App";
import WebPortfolio from "../pages/WebPortfolio";
import ArtPortfolio from "../pages/ArtPortfolio";
import Error from "../pages/Error";

export default function Router()
{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />
        },
        {
            path: "web",
            element: <WebPortfolio />,
        },
        {
            path: "art",
            element: <ArtPortfolio />,
        }
    ]);

    return <RouterProvider router={router} />
}