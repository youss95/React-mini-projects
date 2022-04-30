import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./MainNavigation.module.css";
import { logoutTest } from "../../moduels/auth";
import { useEffect } from "react";
const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutTest());
  };
  useEffect(() => {
    console.log(isLoggedIn);
  });
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>header</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
