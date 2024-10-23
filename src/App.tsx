import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Arrive from "./components/Arrive";
import Home from "./components/Home";
import CreateEmployee from "./components/CreateEmployee";
import LastLeaver from "./components/LastLeaver";
import CreateChecklist from "./components/CreateChecklist";
import Report from "./components/Report";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/arrive" element={<Arrive />} />
          <Route path="/report" element={<Report />} />
          <Route path="/employee" element={<CreateEmployee />} />
          <Route path="/create-checklist" element={<CreateChecklist />} />
          <Route path="/last-leaver" element={<LastLeaver />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
