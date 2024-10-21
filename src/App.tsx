import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Arrive from "./components/Arrive";
import Leave from "./components/Leave";
import AdminPanel from "./components/AdminPanel";
import Home from "./components/Home";
import CreateEmployee from "./components/CreateEmployee";
import LastLeaver from "./components/LastLeaver";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/arrive" element={<Arrive />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/employee" element={<CreateEmployee />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/last-leaver" element={<LastLeaver />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
