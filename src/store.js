import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';
import practiceReducer from './practiceSlice'

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    practice : practiceReducer,
  },
});

export default store;
