import React from "react";
import Header from "./Header";
import styles from "../styles/GlobalStyles";
import Sidebar from "./Sidebar";
import PreviousVisitor from "./PreviousVisitor";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={styles.content}>
        <PreviousVisitor />
      </div>
    </>
  );
};

export default Home;