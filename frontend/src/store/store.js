// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import loginReducer from './login/loginSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer
  },
});

export default store;
