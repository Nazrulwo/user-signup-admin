import { CSSProperties } from "react";

interface Styles {
  [key: string]: CSSProperties;
}

const styles: Styles = {
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 20px",
    height: "72px", 
    backgroundColor: "#ccc",
    color: "black",
  },
  logo: {
    width: "200px",
    paddingTop: "3px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px", 
  },
  userTitle: {
    margin: 0,
    fontSize: "15px",
  },
  logout: {
    padding: "10px 20px", 
    backgroundColor: "#000",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px", 
  },
  logoutHover: {
    backgroundColor: "#333",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "top",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginLeft: "285px", 
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "0 20px 0px",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    padding: "20px",
    justifyContent: "center",
  },
  suggestions: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    maxHeight: "200px",
    overflowY: "auto" as "auto",
    marginTop: "10px",
    backgroundColor: "#fff",
  },
  suggestionItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  visitorContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  topTitle: {
    backgroundColor: "#ccc",
    padding: "0 20px",
    marginBottom: "20px",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  section: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  list: {
    width: "350px",
    padding: "0",
  },
  prevList: {
    padding: "0 18px",
  },
  listItem: {
    display: 'flex',                
    justifyContent: 'space-between',
    alignItems: 'center',           
    padding: '10px 0',
  },
  visitors: {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '10px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse', 
    marginBottom: '20px',
  },
  th: {
    borderBottom: '2px solid #ccc',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
  },
  td: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  },
  logoutButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px', 
  },


  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",  
    width: "250px",  
    backgroundColor: "#333",  
    padding: "2px 20px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  sidebarLink: {
    color: "white",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "18px",
    textAlign: "left",
    backgroundColor: "transparent",
    borderRadius: "4px",
  },
  linkHover: {
    backgroundColor: "#555",  
  },
  menuTitle: {
    fontSize: "15px",
    color: "#fff",
    fontWeight: "bold",
    paddingTop: "20px",
    paddingBottom: "5px",
  },
  content: {
    marginLeft: "285px", 
    padding: "20px",
  },
};


export default styles;
