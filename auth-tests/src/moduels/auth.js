import { createAction, handleActions } from "redux-actions";
const LOGIN = "auth/login";
const LOGOUT = "auth/logout";

const initialState = {
  token: "",
  isLoggedIn: !!localStorage.getItem("token"),
};

export const loginTest = createAction(LOGIN, (token) => {
  localStorage.setItem("token", token);
  return token;
});
export const logoutTest = createAction(LOGOUT, () => {
  localStorage.removeItem("token");
});

const auth = handleActions(
  {
    [LOGIN]: (state, action) => ({
      ...state,
      token: action.payload,
      isLoggedIn: !!action.payload,
    }),
    [LOGOUT]: (state, action) => ({
      ...state,
      token: "",
      isLoggedIn: false,
    }),
  },
  initialState
);

export default auth;
