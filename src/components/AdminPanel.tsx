import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import VisitorList from "./VisitorList";
import styles from "../styles/GlobalStyles";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <Header />
      <div style={styles.buttonContainer}>
        <button 
            style={{ ...styles.logout, ...(isHovered ? styles.logoutHover : {}) }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            onClick={() => navigate("/arrive")}
        >
            Arrive
        </button>
        <button onClick={() => navigate("/leave")} style={styles.button}>Leave</button>
        <button onClick={() => navigate("/admin")} style={styles.button}>Admin Panel</button>
      </div>
      <VisitorList />
    </>
  );
};

export default Home;
