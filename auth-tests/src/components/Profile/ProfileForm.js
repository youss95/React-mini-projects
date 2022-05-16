import axios from "axios";
import { useRef } from "react";
import classes from "./ProfileForm.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileForm = () => {
  const newPasswordInput = useRef();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const submitHandler = async (e) => {
    e.preventDefault();

    const enterNewPassword = newPasswordInput.current.value;
    //validation
    try {
      const changeStatus = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD_QepXNq_Fxe5EkmUQroULB6m269QxBZg",
        {
          idToken: token,
          password: enterNewPassword,
          returnSecureToken: false,
        }
      );
      navigate("/");
      console.log(changeStatus);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInput}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
