import { createBrowserRouter } from "react-router-dom";
// Pages
import Home from "../pages/Home/Home";
import Overview from "../pages/Quiz/Overview";
import QuizPage from "../pages/Quiz/QuizPage";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/overview',
            element: <Overview />
        },
        {
            path: "/quiz",
            element: <QuizPage />,
        },
    ]
);

export default router