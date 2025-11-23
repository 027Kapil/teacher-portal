// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: { 
    isLoggedIn:false,
    userData:{},
    userType:"teacher"
   },
  reducers: {
    setIsLoggedIn: (state,action) => {
      state.isLoggedIn = action.payload;
    },
    setLoggedInUserData: (state,action) => {
      state.userData = action.payload;
    },
    setLoggedInUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export const { setIsLoggedIn, setLoggedInUserData, setLoggedInUserType } = loginSlice.actions;
export default loginSlice.reducer;
