import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  totalMarks: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    updateQuestion: (state, action) => {
      const { index, newQuestion } = action.payload;
      if (state.questions[index]) {
        state.questions[index] = newQuestion;
      }
    },
    deleteQuestion: (state, action) => {
      state.questions.splice(action.payload, 1);
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    updateTotalMarks: (state) => {
      state.totalMarks = state.questions.reduce((sum, q) => sum + q.marks, 0);
    },
  },
});

export const { addQuestion, updateQuestion, deleteQuestion, setCurrentQuestion, updateTotalMarks } = quizSlice.actions;
export default quizSlice.reducer;
