import { useEffect, useRef } from "react";
import Button from "../../components/ui/Button"
import Dialog from "../../components/container/Dialog";
import QuizAttribute from "../../components/form/QuizAttribute";
import LoginForm from "../../components/form/LoginForm";
import { useAuth } from "../../hooks/useAuth";
import { chechQuizAttempt } from "../../utilities/QuizUtil";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const isLoggedIn = useAuth();
    const navigate = useNavigate();

    const quizDialogRef = useRef<HTMLDialogElement>(null);
    const loginDialogRef = useRef<HTMLDialogElement>(null);

    function toggleQuizDialog() {
        if (!quizDialogRef.current) {
            return;
        }
        quizDialogRef.current.hasAttribute("open")
            ? quizDialogRef.current.close()
            : quizDialogRef.current.showModal();
    }

    function toggleLoginDialog() {
        if (!loginDialogRef.current) {
            return;
        }
        loginDialogRef.current.hasAttribute("open")
            ? loginDialogRef.current.close()
            : loginDialogRef.current.showModal();
    }

    useEffect(() => {
        const isQuizAttempted = chechQuizAttempt();

        if (isQuizAttempted) navigate('/quiz')
    })


    return (
        <>
            <main className="h-screen w-full bg-[url('/home-bg.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-6">
                <h1 className="display-1 text-accent font-bold italic">Cerebrum</h1>
                <p className="body-1 text-center">Your all in one quiz place</p>
                {isLoggedIn ? (
                    <Button label="Start Quiz" type="button" color="Accent" width="Fit" size="Large" onClick={toggleQuizDialog} />
                ) : (
                    <Button label="Login" type="button" color="Accent" width="Fit" size="Large" onClick={toggleLoginDialog} />
                )}
            </main>
            <Dialog toggleDialog={toggleQuizDialog} ref={quizDialogRef}>
                <p className="heading-3 font-semibold text-center mb-2">Customize quiz</p>
                <span className="body-1 text-center mb-6">Before continuing please customize the quiz to your liking</span>
                <QuizAttribute />
            </Dialog>
            <Dialog toggleDialog={toggleLoginDialog} ref={loginDialogRef}>
                <p className="heading-3 font-semibold text-center mb-2">Login</p>
                <span className="body-1 text-center mb-6">Before continuing please login first</span>
                <LoginForm />
                <span className="caption-2 mt-4">for development purpose you can acces the available user <a href="https://dummyjson.com/users" target="_blank" className="caption-2 text-blue-500 hover:text-blue-700 underline">here</a></span>
            </Dialog>
        </>
    )
}

export default Home