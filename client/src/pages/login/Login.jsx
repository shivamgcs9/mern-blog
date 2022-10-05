import axios from "axios";
import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res?.data && navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          ref={userRef}
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          ref={passwordRef}
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link to="/register" className="link">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
