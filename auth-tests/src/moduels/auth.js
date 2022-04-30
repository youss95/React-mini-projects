import { createAction, handleActions } from "redux-actions";
const LOGIN = "auth/login";
const LOGOUT = "auth/logout";
const isLoggedIn = !!localStorage.getItem("token");
const initialState = {
  token: "",
  isLoggedIn: isLoggedIn,
};
const calculateTime = (time) => {
  const currentTime = new Date().getTime();
  const adjTime = new Date(time).getTime();
  const remainTime = adjTime - currentTime;

  return remainTime;
};
let logoutTimer;
//시간이 오래되면 토큰을 재설정
const retrieveStoredToken = () => {
  const storeToken = localStorage.getItem("token");
  const storedExDate = localStorage.getItem("exTime");
  const remainingTime = calculateTime(storedExDate);
  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("exTime");
    return null;
  }
  return {
    token: storeToken,
    duration: remainingTime,
  };
};
export const logoutTest = createAction(LOGOUT, () => {
  localStorage.removeItem("token");
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }
});

export const loginTest = createAction(LOGIN, (token, time) => {
  localStorage.setItem("token", token);
  localStorage.setItem("exTime", time);
  const remainTime = calculateTime(time);
  logoutTimer = setTimeout(logoutTest, remainTime);
  return token;
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
