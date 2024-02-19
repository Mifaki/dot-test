import { createBrowserRouter } from "react-router-dom";
// Component
import ProtectedRoute from "../components/Routes/ProtectedRoute";
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
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/overview",
                    element: <Overview />,
                },
                {
                    path: "/quiz",
                    element: <QuizPage />,
                },
                {
                    path: "/result",
                    element: <Result />,
                },
            ],
        },
    ]
);

export default router