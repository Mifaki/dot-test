import { useEffect } from 'react';
import Button from '../../components/ui/Button';
import { useQuizStore } from '../../context/useQuizStore';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const quizStore = useQuizStore((state) => state);
    const navigate = useNavigate();

    const { numberOfQuestions, category, difficulty } = quizStore;

    useEffect(() => {
        if (!numberOfQuestions || !category || !difficulty) {
            navigate('/');
        }
    }, [numberOfQuestions, category, difficulty]);

    const RedirectTo = (url: string): void => {
        navigate(url);
    }

    return (
        <>
            <main className="h-screen container w-full flex flex-col justify-center items-center gap-6">
                <h1 className='heading-1 font-bold text-accent'>Quiz Detail</h1>
                <span className="boay-1">Number of Question: {numberOfQuestions}</span>
                <span className="boay-1">Category: {category}</span>
                <span className="boay-1">Difficulty: {difficulty}</span>
                <div className='flex justify-center items-center gap-6'>
                    <Button label='Go Back' type='button' color='Purple' width='Fit' size='Medium' />
                    <Button label="Start Quiz" type="button" color="Accent" width="Fit" size="Medium" onClick={() => RedirectTo('/quiz')} />
                </div>
            </main>
        </>
    );
};

export default Overview;
