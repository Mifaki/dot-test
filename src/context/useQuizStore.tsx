import { create } from 'zustand';

type QuizStore = {
  numberOfQuestions: string;
  category: string;
  difficulty: string;
  setQuizAttributes: (attributes: Partial<QuizStore>) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  numberOfQuestions: '',
  category: '',
  difficulty: '',
  setQuizAttributes: (attributes) => {
    set((state) => ({ ...state, ...attributes }));
  },
}));
