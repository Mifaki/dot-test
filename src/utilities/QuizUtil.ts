export const shuffleOptions = (question: QuizQuestion): QuizQuestion => {
  const options = [question.correct_answer, ...question.incorrect_answers];
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  return {
    ...question,
    options: shuffledOptions,
  };
};

export const filterAnsweredQuestions = (
  unansweredQuestions: QuizQuestion[],
  answeredQuestions: QuizQuestion[]
): QuizQuestion[] => {
  return unansweredQuestions.filter(
    (question: QuizQuestion) => !answeredQuestions.find((answered) => answered.question === question.question)
  );
};

export const calculateScore = (correctAnswers: number, totalQuestions: number): number => {
  return totalQuestions !== 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
};

export const chechQuizAttempt = () => {
  const quiz = localStorage.getItem('questions');

  if(quiz !== null ) {
    return true
  } else  {
    return false
  }
}