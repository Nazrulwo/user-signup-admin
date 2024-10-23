import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/GlobalStyles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/")
  };

  return (
    <header style={styles.header}>
      <div style={styles.right}>
        <h3 style={styles.userTitle}>User: Admin</h3>
        <button 
          style={{ ...styles.logout, ...(isHovered ? styles.logoutHover : {}) }} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;