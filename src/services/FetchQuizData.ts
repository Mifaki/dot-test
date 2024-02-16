import axios from "axios";

export const getQuestion = async (
  amount: string,
  category: string,
  difficulty: string,
  type: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_QUIZ_ENDPOINT}?category=${category}&amount=${amount}&difficulty=${difficulty}&type=${type}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};