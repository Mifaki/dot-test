import { create } from 'zustand';

type QuizStore = {
  numberOfQuestions: string | null;
  category: string | null;
  difficulty: string | null;
  type: string | null;
  setQuizAttributes: (attributes: Partial<QuizStore>) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  numberOfQuestions: null,
  category: null,
  difficulty: null,
  type: null,
  setQuizAttributes: (attributes) => {
    console.log("Setting Quiz Attributes:", attributes);
    set((state) => ({ ...state, ...attributes }));
  },
}));
