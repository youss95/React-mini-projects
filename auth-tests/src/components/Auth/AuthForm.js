import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import classes from "./AuthForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginTest } from "../../moduels/auth";
const AuthForm = () => {
  const dispatch = useDispatch();
  const tokenId = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  useEffect(() => {
    console.log("s", tokenId);
    console.log("d", isLoggedIn);
  }, [tokenId, isLoggedIn]);
  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_QepXNq_Fxe5EkmUQroULB6m269QxBZg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_QepXNq_Fxe5EkmUQroULB6m269QxBZg";
    }
    try {
      const authSt = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      console.log("authSt", authSt);
      let token = authSt.data.idToken;
      const exTime = new Date(
        new Date().getTime() + parseInt(authSt.data.expiresIn * 1000)
      );
      dispatch(loginTest(token, exTime.toString()));
    } catch (e) {
      let errMsg = e.response.data.error.message;
      //console.log(errMsg);
      alert(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p style={{ color: "white" }}>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
