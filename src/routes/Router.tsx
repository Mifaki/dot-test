import { createBrowserRouter } from "react-router-dom";
// Pages
import Home from "../pages/Home/Home";
import Overview from "../pages/Quiz/Overview";
import QuizPage from "../pages/Quiz/QuizPage";
import Result from "../pages/Quiz/Result";

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
        {
            path: "/result",
            element: <Result />,
        },
    ]
);

export default router