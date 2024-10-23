import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/softcode_logo_black.png';
import styles from "../styles/GlobalStyles";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === "admin" && password === "pass") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.loginContainer}>
      <img src={logo} style={styles.logo} alt="Logo" />
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
