import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/GlobalStyles";
import logo from '../assets/softcode_logo.png';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  const links = [
    { name: "Report", path: "/report" },
    { name: "Visitor", path: "/visitor" },
    { name: "Visitor Logout", path: "/logout" },
    { name: "Create Employee", path: "/employee" },
    { name: "Employee List", path: "/employee-list" },
    { name: "Create Checklist", path: "/create-checklist" },
    { name: "Last Leaver", path: "/last-leaver" }
  ];

  return (
    <div style={styles.sidebar}>
        <div style={styles.logo}>
            <img src={logo} style={styles.logo} alt="Logo" />        
        </div>
        <div style={styles.menuTitle}>MENU</div>
        {links.map((link) => (
        <div
          key={link.name}
          style={{
            ...styles.sidebarLink,
            ...(hoveredLink === link.name ? styles.linkHover : {}),
            ...(location.pathname === link.path ? styles.linkHover : {})
          }}
          onMouseEnter={() => setHoveredLink(link.name)}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => navigate(link.path)}
        >
          {link.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;