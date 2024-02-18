import { useEffect, useState } from "react";
import { getQuestion } from "../../services/FetchQuizData";
import { useQuizStore } from "../../context/useQuizStore";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/Loading";
import QuizOption from "../../components/pages/QuizPage/QuizOption";
import Countdown from "../../components/pages/QuizPage/Countdown";
import { shuffleOptions } from "../../utilities/QuizUtil";

const QuizPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const { numberOfQuestions, category, difficulty } = useQuizStore();

  useEffect(() => {
    const storedCorrectAnswers = localStorage.getItem('totalCorrectAnswers');
    if (storedCorrectAnswers) {
      setCorrectAnswers(parseInt(storedCorrectAnswers, 10));
    }
  }, []);


  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await getQuestion(numberOfQuestions, category, difficulty);

      if (!data || data.length <= 0) {
        navigate('/');
        return;
      }

      const shuffledQuestions = data.map(shuffleOptions);
      setQuestions(shuffledQuestions);
      setTotalQuestions(shuffledQuestions.length);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [numberOfQuestions, category, difficulty, navigate]);

  const optionColors = ["Yellow", "Blue", "Purple", "Turquoise"];

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrectAnswer = selectedOption === currentQuestion.correct_answer;

    if (isCorrectAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      localStorage.setItem('totalCorrectAnswers', (correctAnswers + 1).toString());
    }

    const storedQuestions = JSON.parse(localStorage.getItem('questions') || '[]');
    const updatedQuestions = storedQuestions.filter(
      (question: QuizQuestion) => question.question !== currentQuestion.question
    );
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("quiz finisded");
      console.log(`Correct Answers: ${correctAnswers}/${totalQuestions}`);
      localStorage.removeItem('countdownTime');
      localStorage.removeItem('questions');
    }
  };

  const handleQuizCompleted = () => {
    console.log("Quiz finished");
    console.log(`Correct Answers: ${correctAnswers}/${totalQuestions}`);
    localStorage.removeItem('countdownTime');
    localStorage.removeItem('questions');
  };


  return (
    <>
      <main className="h-screen container w-full flex flex-col justify-center items-center gap-6">
        {loading ? (
          <Loading text="Generating questions..." />
        ) : (
          <>
            <Countdown time={20} onTimerEnd={handleQuizCompleted} />
            <h1 className="heading-5 font-semibold mb-12">
              {questions[currentQuestionIndex]?.question}
            </h1>
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* @ts-expect-error */}
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <QuizOption
                  key={index}
                  options={option}
                  color={optionColors[index]}
                  onClick={() => handleOptionClick(option)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default QuizPage;
