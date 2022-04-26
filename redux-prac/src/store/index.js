import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
const initialAuthState = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

//  counterSlice.actions.toggle  : //{type: ''} 이거랑 같게해줌
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export default store;
