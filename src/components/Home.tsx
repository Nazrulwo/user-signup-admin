import React from "react";
import Header from "./Header";
import VisitorList from "./VisitorList";
import ButtonGroup from "./ButtonGroup";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ButtonGroup />
      <VisitorList />
    </>
  );
};

export default Home;