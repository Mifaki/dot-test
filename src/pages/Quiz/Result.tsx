import { useEffect, useState } from 'react';
import { calculateScore } from '../../utilities/QuizUtil';
import Loading from '../../components/ui/Loading';
import ScoreCircle from '../../components/pages/Result/ScoreCircle';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Result = () => {
  const totalCorrectAnswers = localStorage.getItem('totalCorrectAnswers') ? localStorage.getItem('totalCorrectAnswers') : '0';
  const totalQuestions = localStorage.getItem('total_questions');
  const [score, setScore] = useState<number | null>(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {

    if (totalCorrectAnswers && totalQuestions) {
      const correctAnswers = parseInt(totalCorrectAnswers, 10);
      const questions = parseInt(totalQuestions, 10);

      const calculatedScore = calculateScore(correctAnswers, questions);
      setScore(calculatedScore);
      setIncorrectAnswers(questions - correctAnswers)
      setLoading(false)
    }

    if (score === null) {
      console.log(score);

      // localStorage.removeItem('totalCorrectAnswers');
      // localStorage.removeItem('total_questions');
      // navigate('/');
    }

  }, []);

  const handleGoBack = () => {
    localStorage.removeItem('totalCorrectAnswers');
    localStorage.removeItem('total_questions');
    navigate('/');
  }

  return (
    <main className="h-screen container w-full flex flex-col justify-center items-center gap-6">
      {loading ? (
        <Loading text="Calculating Final Score..." />
      ) : (
        score !== null && (
          <>
            <h1 className="heading-1 text-accent font-bold mb-12">
              Final Score
            </h1>
            <div className="relative">
              <h2 className="heading-3 font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {score}
              </h2>
              <ScoreCircle score={score} />
            </div>
            <div className='flex flex-col gap-1 text-center'>
              <span className="boay-1">Number of Questions: {totalQuestions}</span>
              <span className="boay-1">Correct Answers: {totalCorrectAnswers}</span>
              <span className="boay-1">Incorrect Answers: {incorrectAnswers}</span>

            </div>
            <Button label="Go Back" type="button" color="Accent" width="Fit" size="Medium" onClick={() => handleGoBack()} />
          </>
        )
      )}
    </main>
  );
};

export default Result;
