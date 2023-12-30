import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    if (username === "bharatagri" && password === "1234") {
      navigate("/crop-list");
    } else {
      setPassword("");
      setUsername("");
      setLoginError(true);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar
        fixed="top"
        style={{
          backgroundColor: "green",
          height: "64px",
          color: "white",
          justifyContent: "center",
          fontSize: "24px",
          fontFamily: "cursive",
        }}
      >
        BharatAgri 🌾
      </Navbar>
      <h1
        style={{
          color: "green",
          fontSize: "40px",
          textAlign: "center",
          fontFamily: "",
        }}
      >
        Login
      </h1>
      <label htmlFor="username" style={styles.label}>
        Username:
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <label htmlFor="password" style={styles.label}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={login} style={styles.button}>
        Login
      </button>
      {loginError && (
        <div className="error" style={styles.error}>
          Invalid credentials. Please try again.
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "450px",
    margin: " 100px auto",
    padding: " 10px 20px 30px",
    border: "2px solid green",
    borderRadius: "5px",
    marginTop: "200px",
  },
  h1: {
    color: "red",
    textAlign: "center",
    fontSize: "40px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "95%",
    padding: "8px",
    margin: "5px 0px",
  },
  button: {
    color: "white",
    cursor: "pointer",
    border: "3px solid green",
    display: "flex",
    backgroundColor: "green",
    textAlign: "center",
    marginLeft: "150px",
    marginTop: "10px",
    padding: "8px",
  },
  error: {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default Login;
