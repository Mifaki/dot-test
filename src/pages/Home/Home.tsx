import { useRef } from "react";
import Button from "../../components/ui/Button"
import Dialog from "../../components/container/Dialog";
import QuizAttribute from "../../components/form/QuizAttribute";

const Home = () => {

    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    
    return (
        <>
            <main className="h-screen w-full bg-[url('/home-bg.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-6">
                <h1 className="display-1 text-accent font-bold italic">Cerebrum</h1>
                <p className="body-1 text-center">Your all in one quiz place</p>
                <Button label="Start Quiz" type="button" color="Accent" width="Fit" size="Large" onClick={toggleDialog} />
            </main>
            <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
                <p className="heading-3 font-semibold text-center mb-2">Customize quiz</p>
                <span className="body-1 text-center mb-6">Before continuing please customize the quiz to your liking</span>
                <QuizAttribute />
            </Dialog>
        </>
    )
}

export default Home