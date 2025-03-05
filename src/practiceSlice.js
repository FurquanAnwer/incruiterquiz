import { createSlice } from '@reduxjs/toolkit';

const practiceSlice = createSlice({
  name: 'practice',
  initialState: {
    questions: [],
    userAnswers: {},
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    submitAnswers: (state, action) => {
      state.userAnswers = action.payload; 
    },
  },
});

export const { addQuestion, submitAnswers } = practiceSlice.actions;
export default practiceSlice.reducer;
