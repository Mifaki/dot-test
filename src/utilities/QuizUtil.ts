// quizUtils.ts
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
