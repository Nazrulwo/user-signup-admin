import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import styles from "../styles/GlobalStyles";

const Leave: React.FC = () => {
  const [visitorName, setVisitorName] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Visitor has left:", visitorName);
    navigate("/");
  };

  return (
    <>
      <Header />
      <ButtonGroup />
      <div style={styles.container}>
        <h2>Leave</h2>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Visitor Name"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default Leave;
