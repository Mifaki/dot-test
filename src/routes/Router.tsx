import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Overview from "../pages/Quiz/Overview";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/overview',
            element: <Overview />
        }
    ]
);

export default router