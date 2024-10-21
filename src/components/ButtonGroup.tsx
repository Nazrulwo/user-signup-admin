import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/GlobalStyles";

const ButtonGroup: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div style={styles.buttonContainer}>
      <button
        style={{
          ...styles.button,
          ...(hoveredButton === "admin" ? styles.logoutHover : {}),
        }}
        onMouseEnter={() => setHoveredButton("admin")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => navigate("/home")}
      >
        Admin Panel
      </button>
      <button
        style={{
          ...styles.button,
          ...(hoveredButton === "arrive" ? styles.logoutHover : {}),
        }}
        onMouseEnter={() => setHoveredButton("arrive")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => navigate("/arrive")}
      >
        Arrive
      </button>
      <button
        style={{
          ...styles.button,
          ...(hoveredButton === "leave" ? styles.logoutHover : {}),
        }}
        onMouseEnter={() => setHoveredButton("leave")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => navigate("/leave")}
      >
        Leave
      </button>
      <button
        style={{
          ...styles.button,
          ...(hoveredButton === "employee" ? styles.logoutHover : {}),
        }}
        onMouseEnter={() => setHoveredButton("employee")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => navigate("/employee")}
      >
        Create Employee
      </button>
      <button
        style={{
          ...styles.button,
          ...(hoveredButton === "last" ? styles.logoutHover : {}),
        }}
        onMouseEnter={() => setHoveredButton("last")}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => navigate("/last-leaver")}
      >
        Last Leaver
      </button>
    </div>
  );
};

export default ButtonGroup;
