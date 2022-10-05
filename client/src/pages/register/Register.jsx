import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      res.data && navigate("/login");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
        />
        <button className="registerButton" type="submbit">
          Register
        </button>
      </form>
      <Link to="/login" className="link">
        <button className="registerLoginButton">Login</button>
      </Link>
      {err && (
        <span
          style={{
            color: "red",
            marginTop: "20px",
            letterSpacing: "5px",
            fontSize: "20px",
          }}
        >
          Something went Wrong!
        </span>
      )}
    </div>
  );
}
