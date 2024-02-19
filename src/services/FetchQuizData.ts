import axios from "axios";

export const getQuestion = async (
  amount: string,
  category: string,
  difficulty: string,
): Promise<any> => {
  try {
    const storedQuestionsString = localStorage.getItem('questions');
    if (storedQuestionsString) {
      const storedQuestions = JSON.parse(storedQuestionsString);
      return storedQuestions;
    }

    const response = await axios.get(
      `${import.meta.env.VITE_QUIZ_ENDPOINT}?category=${category}&amount=${amount}&difficulty=${difficulty}&type=multiple`
    );

    if(response.data.results.length <= 0) return

    const fetchedQuestions = response.data.results;
    localStorage.setItem('questions', JSON.stringify(fetchedQuestions));
    localStorage.setItem('total_questions', JSON.stringify(fetchedQuestions.length));

    return fetchedQuestions;
  } catch (error) {
    console.error(error);
  }
};
